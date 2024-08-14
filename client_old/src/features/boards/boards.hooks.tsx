import { boardService } from "@/services/board-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useBoards = () => {
  const [page] = useState<number>(1);
  const [size] = useState<number>(10);
  const [timestamp] = useState<Date>(new Date());

  const { getAccessTokenSilently } = useAuth0();

  const getBoards = async () => {
    console.log("HERE");
    const accessToken = await getAccessTokenSilently();

    const response = await boardService.getBoards(
      accessToken,
      page,
      size,
      timestamp
    );

    return response.results ?? [];
  };

  const {
    isLoading,
    error,
    data: boards,
    refetch: refetchBoards,
  } = useQuery({
    queryKey: ["boards", page, size],
    queryFn: getBoards,
  });

  return { boards, error, isLoading, refetchBoards };
};
