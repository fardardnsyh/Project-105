import BoardColumnCreate from "@/features/board/interveiw-board/board-column/board-column-create/board-column-create";
import { useParams } from "react-router-dom";

const CreateColumn = () => {
  const { boardId } = useParams();
  if (!boardId) {
    return null;
  }
  return <BoardColumnCreate boardId={+boardId} />;
};

export default CreateColumn;
