import { Button } from "@/components/ui/button";
import { JobModel } from "@/models/job-model";
import { useBoardColumnJob } from "./board-column-job.hooks";
import { BoardColumnModel } from "@/models/board-column-model";
import BoardColumnJobCompany from "./board-column-job-company/board-column-job-company";

type Props = {
  job: JobModel;
  column: BoardColumnModel;
};

const BoardColumnJob = ({ job, column }: Props) => {
  const { openJob } = useBoardColumnJob(job, column);
  return (
    <Button
      className="p-3 h-[unset] border drop-shadow w-full flex-col items-start text-md gap-3"
      variant="outline"
      onClick={openJob}
    >
      <p className="font-semibold">{job.jobTitle}</p>
      <BoardColumnJobCompany company={job.company} />
    </Button>
  );
};

export default BoardColumnJob;
