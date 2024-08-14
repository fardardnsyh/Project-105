import { Outlet } from "react-router-dom";
import InterviewBoard from "@/features/board/interveiw-board/interview-board";
import LayoutSidebar from "@/layout/layout-sidebar/layout-sidebar";
import { InterviewBoardProvider } from "@/features/board/interveiw-board/inerview-board-provider";

const Board = () => {
  return (
    <InterviewBoardProvider>
      <LayoutSidebar>
        <InterviewBoard />
        <Outlet />
      </LayoutSidebar>
    </InterviewBoardProvider>
  );
};

export default Board;
