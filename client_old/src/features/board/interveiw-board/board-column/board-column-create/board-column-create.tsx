import { Button } from "@/components/ui/button";
import ErrorAlertFixed from "@/errors/error-alert-fixed/error-alert-fixed";
import { X } from "lucide-react";
import { useBoardColumnCreate } from "./board-column-create.hooks";
import AlertLoading from "@/components/alert/alert-loading/alert-loading";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  boardId: number;
};

const BoardColumnCreate = ({ boardId }: Props) => {
  const { closeColumn, createColumn, error, isPending, label, changeLabel } =
    useBoardColumnCreate(boardId);
  return (
    <>
      <div
        className="bg-foreground fixed top-0 left-0 w-full h-full opacity-50"
        onClick={closeColumn}
      ></div>
      <AlertLoading isLoading={isPending} />
      <ErrorAlertFixed error={error} showClose />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded p-5 z-[100] flex flex-col gap-5 w-[20%]">
        <div className="flex gap-5 items-center">
          <h3 className="font-semibold">Add Column</h3>
          <Button
            variant="ghost"
            className="ml-auto h-10 w-10 p-1"
            onClick={closeColumn}
          >
            <X size={16} />
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Label htmlFor="column-label">Column Name</Label>
            <Input
              id="column-label"
              placeholder="Column Name"
              value={label}
              onChange={(e) => changeLabel(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            type="submit"
            onClick={() => createColumn()}
            className="ml-auto"
          >
            Create Column
          </Button>
        </div>
      </div>
    </>
  );
};

export default BoardColumnCreate;
