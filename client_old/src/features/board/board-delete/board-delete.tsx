import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BoardModel } from "@/models/board-model";
import { Trash } from "lucide-react";
import { useBoardDelete } from "./board-delete.hooks";
import ErrorAlert from "@/errors/error-alert/error-alert";

type Props = {
  board: BoardModel;
  refetchBoards: () => void;
};

const BoardDelete = ({ board, refetchBoards }: Props) => {
  const {
    deleteBoard,
    isPending,
    error,
    textToConfirm,
    confirmationInput,
    changeConfirmationInput,
  } = useBoardDelete(board, refetchBoards);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-10 h-10 p-0">
          <Trash size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl flex flex-col gap-7">
        <DialogHeader>
          <DialogTitle>Delete Board</DialogTitle>
        </DialogHeader>
        <ErrorAlert error={error} />
        <form className="flex flex-col gap-7" onSubmit={(e) => deleteBoard(e)}>
          <div>
            <h4 className="font-semibold text-xl">Are you absolutely sure?</h4>
            <p className="text-muted-foreground">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="confirm-input" className="font-semibold">
              To confirm, please type "{textToConfirm}" in the box below.
            </Label>
            <Input
              id="confirm-input"
              value={confirmationInput}
              onChange={(e) => changeConfirmationInput(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="destructive"
              type="submit"
              disabled={isPending || textToConfirm !== confirmationInput}
            >
              Delete Board
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BoardDelete;
