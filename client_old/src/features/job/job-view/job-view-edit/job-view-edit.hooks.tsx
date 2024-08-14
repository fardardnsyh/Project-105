import { useInterviewBoard } from "@/features/board/interveiw-board/inerview-board-provider";
import { CompanyModel } from "@/models/company-model";
import { JobModel } from "@/models/job-model";
import { jobService } from "@/services/job-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const useJobViewEdit = (
  job: JobModel | undefined,
  closeJob: () => void
) => {
  const [jobTitle, setJobTitle] = useState<string>(job?.jobTitle ?? "");
  const [company, setCompany] = useState<CompanyModel>(
    job?.company ?? {
      name: "",
    }
  );
  const [jobDescription, setJobDescription] = useState<string>(
    job?.description ?? ""
  );

  const { getAccessTokenSilently } = useAuth0();
  const { refetchBoard, board } = useInterviewBoard();
  const [columnIndex, setColumnIndex] = useState<number>(0);

  const changeColumnIndex = (value: number) => {
    setColumnIndex(value);
  };

  const changeJobTitle = (value: string) => {
    setJobTitle(value);
  };

  const changeCompany = (value: string) => {
    setCompany((curr) => ({ ...curr, name: value }));
  };

  const changeJobDescription = (value: string) => {
    setJobDescription(value);
  };

  const {
    mutate: deleteJob,
    isPending: isDeletePending,
    error: deleteError,
  } = useMutation({
    mutationKey: ["delete-job"],
    mutationFn: async () => {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this job? This process cannot be undone."
      );
      if (!isConfirmed) {
        return Promise.reject(new Error("Deletion cancelled by the user."));
      }

      if (!job) {
        throw new Error("Job is requried to be deleted.");
      }

      const accessToken = await getAccessTokenSilently();

      await jobService.deleteJob(accessToken, job.id);

      refetchBoard();
      closeJob();
    },
  });

  const {
    mutate: updateJob,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["update-job"],
    mutationFn: async () => {
      const accessToken = await getAccessTokenSilently();

      if (!job) {
        throw new Error("A job is required to update.");
      }

      const updatedJob: JobModel = job;

      updatedJob.jobTitle = jobTitle;
      updatedJob.company = company;
      updatedJob.description = jobDescription;
      updatedJob.column = board?.columns.find(
        (column) => column.order === columnIndex
      );

      await jobService.updateJob(accessToken, updatedJob);

      refetchBoard();
      closeJob();
    },
  });

  return {
    jobTitle,
    changeJobTitle,
    company,
    changeCompany,
    jobDescription,
    changeJobDescription,
    updateJob,
    isPending,
    error,
    deleteJob,
    isDeletePending,
    deleteError,
    columnIndex,
    changeColumnIndex,
  };
};
