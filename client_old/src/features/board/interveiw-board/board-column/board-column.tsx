import { BoardColumnModel } from "@/models/board-column-model";
import BoardColumnHeader from "./board-column-header/board-column-header";
import BoardColumnJob from "./board-column-job/board-column-job";

type Props = {
  column: BoardColumnModel;
};

const BoardColumn = ({ column }: Props) => {
  return (
    <div className="border-r w-80 h-full">
      <BoardColumnHeader column={column} />
      <ul className="flex flex-col p-3 gap-3">
        {column?.jobs.map((job) => (
          <li key={job.id}>
            <BoardColumnJob job={job} column={column} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardColumn;
