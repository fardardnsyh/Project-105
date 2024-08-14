import { useInterviewBoard } from "@/features/board/interveiw-board/inerview-board-provider";
import { CompanyModel } from "@/models/company-model";
import { CreateJobModel } from "@/models/create-job-model";
import { jobService } from "@/services/job-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initialJob = {
  jobTitle: "",
  description: "",
  postUrl: "",
  columnId: null,
  hasCoverLetter: false,
  appliedOnCompanySite: false,
  postURL: "",
};

const initialCompany = {
  name: "",
};

export const useJobCreate = (columnId: number) => {
  const [company, setCompany] = useState<CompanyModel>(initialCompany);
  const [createJobDto, setCreateJobDto] = useState<CreateJobModel>(initialJob);

  const { getAccessTokenSilently } = useAuth0();
  const { refetchBoard } = useInterviewBoard();
  const navigate = useNavigate();
  const { boardId } = useParams();
  const {
    mutate: createJob,
    error,
    data,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async () => {
      if (!company) {
        throw new Error("Company is required");
      }
      if (!createJobDto.jobTitle) {
        throw new Error("A job title is required");
      }
      const accessToken = await getAccessTokenSilently();

      const job = await jobService.createJob(
        accessToken,
        createJobDto,
        company
      );

      refetchBoard();
      return job;
    },
  });

  const changeCreateJobDto = <K extends keyof CreateJobModel>(
    key: K,
    value: CreateJobModel[K]
  ) => {
    setCreateJobDto((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const closeJob = useCallback(() => {
    navigate(`/dashboard/board/${boardId}`);
  }, [boardId, navigate]);

  useEffect(() => {
    if (data) {
      closeJob();
    }
  }, [closeJob, data]);

  useEffect(() => {
    if (columnId) {
      setCreateJobDto((curr) => ({ ...curr, columnId }));
    }
  }, []);

  return {
    error,
    isLoading,
    company,
    setCompany,
    createJob,
    createJobDto,
    changeCreateJobDto,
    closeJob,
  };
};
