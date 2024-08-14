import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useParams } from "react-router-dom";
import { useInterviewBoard } from "../../inerview-board-provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { boardService } from "@/services/board-service";

export const useBoardColumnMove = (boardId: number) => {
  const [columnIndex, setColumnIndex] = useState<number>(0);
  const { columnId } = useParams();
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();
  const { refetchBoard } = useInterviewBoard();

  const closeColumn = () => {
    refetchBoard();
    navigate(`/dashboard/board/${boardId}`);
  };

  const {
    data: columns,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["columns"],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const board = await boardService.findBoardById(accessToken, boardId);

      if (board.columns) {
        new Error("No columns available.");
      }

      return board.columns;
    },
  });

  useEffect(() => {
    if (columnId) {
      const index =
        columns?.findIndex((column) => column.id === +columnId) ?? -1;

      if (index >= 0) {
        setColumnIndex(index);
      }
    }
  }, [columnId, columns]);

  const {
    mutate: updateOrder,
    error: updateError,
    isPending,
  } = useMutation({
    mutationKey: ["update-order"],
    mutationFn: async () => {
      const accessToken = await getAccessTokenSilently();

      if (!boardId || !columnId) {
        throw new Error("Missing valid params.");
      }

      await boardService.updateColumnPosition(
        accessToken,
        boardId,
        +columnId,
        columnIndex
      );

      refetchBoard();
      closeColumn();
    },
  });

  const changeColumnIndex = (value: number) => {
    if (columns && columns[value]) {
      setColumnIndex(value);
    }
  };

  return {
    closeColumn,
    updateOrder,
    columnIndex,
    changeColumnIndex,
    updateError,
    columns,
    error,
    isLoading,
    isPending,
  };
};
