import { Button } from "@/components/ui/button";
import { useBoardColumnMove } from "./board-column-move.hooks";
import AlertLoading from "@/components/alert/alert-loading/alert-loading";
import ErrorAlertFixed from "@/errors/error-alert-fixed/error-alert-fixed";
import BoardColumnMoveSelect from "./board-column-move-select/board-column-move-select";

type Props = {
  boardId: number;
};

const BoardColumnMove = ({ boardId }: Props) => {
  const {
    closeColumn,
    updateOrder,
    columnIndex,
    changeColumnIndex,
    error,
    isPending,
    columns,
  } = useBoardColumnMove(boardId);
  return (
    <>
      <div
        className="bg-foreground fixed top-0 left-0 w-full h-full opacity-50"
        onClick={closeColumn}
      ></div>
      <AlertLoading isLoading={isPending} />
      <ErrorAlertFixed error={error} showClose />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded p-5 z-[100] flex flex-col gap-5 w-[20%]">
        <div>
          <h3 className="font-semibold">Move Column</h3>
        </div>
        {columns?.length ? (
          <BoardColumnMoveSelect
            columns={columns}
            columnIndex={columnIndex}
            changeColumnIndex={changeColumnIndex}
          />
        ) : null}
        <div className="flex gap-5">
          <Button variant="secondary" onClick={closeColumn} className="ml-auto">
            Cancel
          </Button>
          <Button type="submit" onClick={() => updateOrder()}>
            Move
          </Button>
        </div>
      </div>
    </>
  );
};

export default BoardColumnMove;
