import ErrorAlertFixed from "@/errors/error-alert-fixed/error-alert-fixed";
import { useBoardCreate } from "./board-create.hooks";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const BoardCreate = () => {
  const { createBoard, error, isLoading, title, changeTitle } =
    useBoardCreate();

  return (
    <>
      <ErrorAlertFixed error={error} showClose />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default">Create Board</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create a board</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex flex-col gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                placeholder="title"
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
            </div>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => createBoard()}
              disabled={!title.length || isLoading}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BoardCreate;
