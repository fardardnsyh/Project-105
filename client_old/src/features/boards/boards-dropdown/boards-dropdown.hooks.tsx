import { BoardModel } from "@/models/board-model";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useBoardsDropdown = (boards: BoardModel[] | undefined) => {
  const { boardId } = useParams();
  const [currentBoardIndex, setCurrentBoardIndex] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (boards && boards.length && boardId) {
      const index = boards.findIndex((board) => board.id === +boardId);

      if (index >= 0) {
        setCurrentBoardIndex(index);
      }
    }
  }, [boardId, boards]);

  const changeCurrentBoardIndex = (boardId: number) => {
    navigate(`/dashboard/board/${boardId}`);
  };

  return { currentBoardIndex, changeCurrentBoardIndex };
};
