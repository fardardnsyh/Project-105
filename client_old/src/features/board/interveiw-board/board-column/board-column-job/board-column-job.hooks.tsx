import { BoardColumnModel } from "@/models/board-column-model";
import { JobModel } from "@/models/job-model";
import { useNavigate } from "react-router-dom";

export const useBoardColumnJob = (job: JobModel, column: BoardColumnModel) => {
  const navigate = useNavigate();
  const openJob = () => {
    navigate(`column/${column.id}/job/${job.id}`);
  };

  return { openJob };
};
