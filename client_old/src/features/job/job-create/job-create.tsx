import ErrorAlertFixed from "@/errors/error-alert-fixed/error-alert-fixed";
import { useJobCreate } from "./job-create.hooks";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CompanyInputSearch from "@/features/company/company-input-search/company-input-search";
import { Checkbox } from "@/components/ui/checkbox";
import MarkdownEditor from "@/components/markdown-editor/markdown-editor";

type Props = {
  columnId: number;
};

const JobCreate = ({ columnId }: Props) => {
  const {
    isLoading,
    error,
    company,
    setCompany,
    createJob,
    createJobDto,
    changeCreateJobDto,
    closeJob,
  } = useJobCreate(columnId);

  return (
    <>
      <div
        className="bg-foreground fixed top-0 left-0 w-full h-full opacity-50"
        onClick={closeJob}
      ></div>
      <ErrorAlertFixed error={error} showClose />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded p-5 z-[100] flex flex-col gap-5 w-full max-w-lg">
        <div className="flex gap-5 items-center">
          <h3 className="font-semibold">Add Job</h3>
          <Button
            variant="ghost"
            className="ml-auto h-10 w-10 p-1"
            onClick={closeJob}
          >
            <X size={16} />
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <CompanyInputSearch company={company} setCompany={setCompany} />
          <div className="flex flex-col gap-3">
            <Label htmlFor="job-title">Job Title</Label>
            <Input
              id="job title"
              placeholder="Job Title"
              value={createJobDto.jobTitle}
              required={true}
              aria-required="true"
              onChange={(e) => changeCreateJobDto("jobTitle", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="job-description">Job Description</Label>
            <MarkdownEditor
              markdown={createJobDto.description}
              onChange={(value: string) =>
                changeCreateJobDto("description", value)
              }
              placeholder="Job Description"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="post-url">Post URL</Label>
            <Input
              id="post-url"
              placeholder="Post URL"
              value={createJobDto.postURL}
              onChange={(e) => changeCreateJobDto("postURL", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="applied-on-company-site"
              checked={createJobDto.appliedOnCompanySite}
              onCheckedChange={(checked) =>
                changeCreateJobDto(
                  "appliedOnCompanySite",
                  checked ? true : false
                )
              }
            />
            <label
              htmlFor="applied-on-company-site"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Applied on Company Site
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="has-cover-letter"
              checked={createJobDto.hasCoverLetter}
              onCheckedChange={(checked) =>
                changeCreateJobDto("hasCoverLetter", checked ? true : false)
              }
            />
            <label
              htmlFor="has-cover-letter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Used a Cover Letter
            </label>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            type="submit"
            onClick={() => createJob()}
            disabled={isLoading}
            className="ml-auto"
          >
            {isLoading ? "Loading..." : "Save Job"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default JobCreate;
