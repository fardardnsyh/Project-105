import { boardService } from "@/services/board-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useBoardCreate = () => {
  const [title, setTitle] = useState<string>("");

  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const {
    mutate: createBoard,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: async () => {
      const accessToken = await getAccessTokenSilently();

      return boardService.createBoard(title, accessToken);
    },
    onSuccess: (data) => {
      navigate(`/dashboard/board/${data.id}`);
    },
  });

  const changeTitle = (value: string) => {
    setTitle(value);
  };

  return { createBoard, error, isLoading, title, changeTitle };
};
