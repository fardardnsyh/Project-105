import { ReactNode } from "react";
import InterviewBoardHeader from "@/features/board/interveiw-board/interview-board-header/interview-board-header";
import { useInterviewBoard } from "@/features/board/interveiw-board/inerview-board-provider";

type Props = {
  children?: ReactNode;
  mainClassName?: string;
};

const LayoutSidebar = ({ children, mainClassName = "" }: Props) => {
  const { board } = useInterviewBoard();
  return (
    <main className={`h-screen flex items-stretch ${mainClassName}`}>
      {/* <Sidebar /> */}
      <div className="grow overflow-scroll flex flex-col">
        {board ? <InterviewBoardHeader /> : null}

        <div className="overflow-x-scroll grow">{children}</div>
      </div>
    </main>
  );
};

export default LayoutSidebar;
