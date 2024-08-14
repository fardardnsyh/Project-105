import { boardService } from "@/services/board-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useInterviewBoardHeader = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [timestamp] = useState<Date>(new Date());
  const {
    data: boards,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["boards"],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();

      return boardService.getBoards(accessToken, 1, 5, timestamp);
    },
  });

  return { boards, isLoading, error };
};
