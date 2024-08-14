import JobCreate from "@/features/job/job-create/job-create";
import { useParams } from "react-router-dom";

const AddJob = () => {
  const { columnId } = useParams();
  return columnId ? <JobCreate columnId={+columnId} /> : null;
};

export default AddJob;
