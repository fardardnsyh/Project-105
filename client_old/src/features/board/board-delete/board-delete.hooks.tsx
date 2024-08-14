import { BoardModel } from "@/models/board-model";
import { boardService } from "@/services/board-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

export const useBoardDelete = (
  board: BoardModel,
  refetchBoards: () => void
) => {
  const { getAccessTokenSilently } = useAuth0();
  const textToConfirm = `${board.title}`;
  const [confirmationInput, setConfirmationInput] = useState<string>("");

  const changeConfirmationInput = (value: string) => {
    setConfirmationInput(value);
  };

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["delete-board"],
    mutationFn: async (boardId: number) => {
      if (confirmationInput !== textToConfirm) {
        throw new Error("Please confirm the deletion by copying the text");
      }
      const accessToken = await getAccessTokenSilently();

      const message = await boardService.deleteBoard(accessToken, boardId);

      refetchBoards();
      return message;
    },
  });

  const deleteBoard = (e: FormEvent) => {
    e.preventDefault();

    mutate(board.id);
  };

  return {
    deleteBoard,
    isPending,
    error,
    textToConfirm,
    confirmationInput,
    changeConfirmationInput,
  };
};
