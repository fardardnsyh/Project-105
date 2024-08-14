import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { JobModel } from "@/models/job-model";
import { X } from "lucide-react";
import { useJobViewEdit } from "./job-view-edit.hooks";
import ErrorAlert from "@/errors/error-alert/error-alert";
import JobViewEditMove from "./job-view-edit-move/job-view-edit-move";
import MarkdownEditor from "@/components/markdown-editor/markdown-editor";

type Props = {
  job: JobModel | undefined;
  closeJob: () => void;
};

const JobViewEdit = ({ job, closeJob }: Props) => {
  const {
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
  } = useJobViewEdit(job, closeJob);
  return (
    <>
      <ErrorAlert error={error} />
      <ErrorAlert error={deleteError} />
      <div className="flex gap-5 items-center">
        <h3 className="font-semibold text-xl">{job?.jobTitle}</h3>
        <Button
          variant="ghost"
          className="ml-auto h-10 w-10 p-1"
          onClick={closeJob}
        >
          <X size={16} />
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="job-title">Job Title</Label>
          <Input
            id="job-title"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => changeJobTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Company"
            value={company.name}
            onChange={(e) => changeCompany(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="job-description">Job Description</Label>
          <MarkdownEditor
            markdown={jobDescription ?? ""}
            className="border rounded text-sm max-h-72 overflow-y-auto"
            onChange={changeJobDescription}
          />
        </div>
      </div>
      <JobViewEditMove
        columnIndex={columnIndex}
        changeColumnIndex={changeColumnIndex}
      />
      <div className="flex gap-5">
        <Button
          variant="destructive"
          disabled={isDeletePending}
          onClick={() => deleteJob()}
        >
          Delete Job
        </Button>
        <ul className="flex items-center gap-3 ml-auto">
          <li>
            <Button variant="secondary" onClick={closeJob}>
              Cancel Changes
            </Button>
          </li>
          <li>
            <Button disabled={isPending} onClick={() => updateJob()}>
              Save Changes
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default JobViewEdit;
