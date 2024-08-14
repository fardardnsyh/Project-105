import ErrorAlert from "@/errors/error-alert/error-alert";
import { useBoards } from "./boards.hooks";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/utils/format-date";
import { buttonVariants } from "@/components/ui/button";
import BoardDelete from "../board/board-delete/board-delete";

const Boards = () => {
  const { boards, error, isLoading, refetchBoards } = useBoards();

  return (
    <div role="feed">
      <ErrorAlert error={error} />
      {isLoading ? (
        <p className="font-semibold">Loading...</p>
      ) : boards?.length ? (
        <ul className="flex flex-col gap-5">
          {boards.map((board) => (
            <li key={board.id}>
              <Card className="flex flex-col gap-5 p-5">
                <div className="flex justify-between items-start">
                  <Link
                    to={`board/${board.id}`}
                    className="hover:underline underline-offset-3"
                  >
                    <h4 className="text-xl font-semibold">
                      Title: {board.title}
                    </h4>
                  </Link>

                  <p className="text-muted-foreground text-sm font-semibold">
                    {formatDate(board.createdAt)}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-5">
                  <Link
                    to={`board/${board.id}`}
                    className={buttonVariants({ variant: "default" })}
                  >
                    Go to board
                  </Link>
                  <BoardDelete board={board} refetchBoards={refetchBoards} />
                </div>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-semibold">No boards available</p>
      )}
    </div>
  );
};

export default Boards;
