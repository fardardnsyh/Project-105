import BoardColumnMove from "@/features/board/interveiw-board/board-column/board-column-move/board-column-move";
import { useParams } from "react-router-dom";

const MoveColumn = () => {
  const { boardId } = useParams();

  if (!boardId) {
    return null;
  }
  return <BoardColumnMove boardId={+boardId} />;
};

export default MoveColumn;
