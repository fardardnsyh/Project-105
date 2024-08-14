import { JobModel } from "@/models/job-model";
import { jobService } from "@/services/job-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useJobView = () => {
  const { boardId, jobId } = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState<boolean>(true);

  const getJob = async (): Promise<JobModel> => {
    if (!jobId) {
      throw new Error("Job ID is required");
    }
    const accessToken = await getAccessTokenSilently();

    return jobService.findJobById(accessToken, +jobId);
  };

  const closeJob = () => {
    console.log("CLOSING JOB");
    navigate(`/dashboard/board/${boardId}`);
  };

  const {
    data: job,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["job"],
    queryFn: getJob,
  });

  const toggleEditing = () => {
    setIsEditing((curr) => !curr);
  };

  return { closeJob, job, isLoading, error, isEditing, toggleEditing };
};
