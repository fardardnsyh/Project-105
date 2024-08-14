import { useJobView } from "./job-view.hooks";
import { Button } from "@/components/ui/button";
import ErrorAlertFixed from "@/errors/error-alert-fixed/error-alert-fixed";
import { X } from "lucide-react";
import Loader from "@/components/loader/loader";
import JobViewEdit from "./job-view-edit/job-view-edit";

const JobView = () => {
  const { closeJob, job, error, isLoading, isEditing } = useJobView();
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        onClick={closeJob}
      ></div>
      <ErrorAlertFixed error={error} showClose />

      <div className="fixed left-[50%] top-10 z-50 grid w-full max-w-lg translate-x-[-50%]  max-h-[90%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-y-auto">
        {isLoading ? (
          <div className="h-[10vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : isEditing ? (
          job ? (
            <JobViewEdit job={job} closeJob={closeJob} />
          ) : null
        ) : (
          <>
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
                <p className="font-semibold">Job Title</p>
                <p className="text-muted-foreground">
                  {job?.jobTitle ?? "No Job Title Available"}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold">Company</p>
                <p className="text-muted-foreground">
                  {job?.company?.name ?? "No Company Available"}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold">Description</p>
                <p className="text-muted-foreground">
                  {job?.description ?? "No Job Description Available"}
                </p>
              </div>
            </div>
            <div className="flex gap-5"></div>
          </>
        )}
      </div>
    </>
  );
};

export default JobView;
