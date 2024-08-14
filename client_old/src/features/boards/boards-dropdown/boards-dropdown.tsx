import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BoardModel } from "@/models/board-model";
import { useBoardsDropdown } from "./boards-dropdown.hooks";

type Props = {
  boards: BoardModel[] | undefined;
};

const BoardsDropdown = ({ boards }: Props) => {
  const { currentBoardIndex, changeCurrentBoardIndex } =
    useBoardsDropdown(boards);

  if (!boards) {
    return null;
  }

  return (
    <Select
      onValueChange={(value) => changeCurrentBoardIndex(+value)}
      value={`${boards[currentBoardIndex]?.id}`}
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Select a board" />
      </SelectTrigger>
      <SelectContent>
        {boards.map((board) => (
          <SelectItem value={`${board.id}`}>{board.title}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BoardsDropdown;
