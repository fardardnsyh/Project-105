import { BoardColumnModel } from "@/models/board-column-model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  columns: BoardColumnModel[];
  columnIndex: number;
  changeColumnIndex: (value: number) => void;
};

const BoardColumnMoveSelect = ({
  columns,
  columnIndex,
  changeColumnIndex,
}: Props) => {
  return (
    <Select
      value={`${columnIndex}`}
      onValueChange={(value: string) => changeColumnIndex(+value)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Column" />
      </SelectTrigger>
      <SelectContent className="z-[150]">
        {columns.map((column, index) => (
          <SelectItem
            key={column.id}
            value={`${index}`}
          >{`Position ${index} - ${column.label} `}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BoardColumnMoveSelect;
