import { BoardColumnModel } from "@/models/board-column-model";
import { boardColumnService } from "@/services/board-column-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInterviewBoard } from "../../inerview-board-provider";

export const useBoardColumnHeader = (column: BoardColumnModel) => {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();
  const { refetchBoard } = useInterviewBoard();
  const [message, setMessage] = useState<{ message: string } | null>(null);

  const addJob = () => {
    navigate(`column/${column.id}/add-job`);
  };

  const changeOrder = () => {
    navigate(`column/${column.id}/change-order`);
  };

  const {
    mutate: deleteColumn,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["delete-column"],
    mutationFn: async () => {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this column? This process cannot be undone."
      );
      if (!isConfirmed) {
        return Promise.reject(new Error("Deletion cancelled by the user."));
      }

      const accessToken = await getAccessTokenSilently();

      const message = await boardColumnService.deleteColumn(
        accessToken,
        column.id
      );

      if (message) {
        setMessage(message);
      }

      refetchBoard();
    },
  });

  return { addJob, changeOrder, deleteColumn, message, error, isPending };
};
