import { BoardModel } from "@/models/board-model";
import { boardService } from "@/services/board-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

type InterviewBoardProps = {
  children: ReactNode;
};

export type BoardProviderState = {
  board: BoardModel | null | undefined;
  getBoard: () => void;
  addColumn: () => void;
  error: { message: string } | null;
  isLoading: boolean;
  refetchBoard: () => void;
};

const initialState: BoardProviderState = {
  board: null,
  getBoard: () => null,
  addColumn: () => null,
  error: null,
  isLoading: false,
  refetchBoard: () => null,
};

const InterviewBoardProviderContext =
  createContext<BoardProviderState>(initialState);

export function InterviewBoardProvider({
  children,
  ...props
}: InterviewBoardProps) {
  const { boardId } = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const getBoard = async () => {
    const accessToken = await getAccessTokenSilently();

    if (!boardId) {
      throw new Error("Board id is required");
    }

    const board = await boardService.findBoardById(accessToken, +boardId);

    return board;
  };

  const addColumn = () => {
    navigate("create-column");
  };

  const {
    data: board,
    error,
    isLoading,
    refetch: refetchBoard,
  } = useQuery({
    queryKey: ["board", boardId],
    queryFn: getBoard,
    refetchOnWindowFocus: true,
  });

  const value = {
    board,
    getBoard,
    addColumn,
    error,
    isLoading,
    refetchBoard,
  };

  return (
    <InterviewBoardProviderContext.Provider {...props} value={value}>
      {children}
    </InterviewBoardProviderContext.Provider>
  );
}

export const useInterviewBoard = () => {
  const context = useContext(InterviewBoardProviderContext);

  if (context === undefined) {
    throw new Error(
      "useInterviewBoard must be used within a InterviewBoardPrivder"
    );
  }

  return context;
};
