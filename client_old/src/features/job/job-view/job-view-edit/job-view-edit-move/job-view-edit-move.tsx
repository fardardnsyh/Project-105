import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { boardService } from "@/services/board-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

type Props = {
  columnIndex: number;
  changeColumnIndex: (value: number) => void;
};

const JobViewEditMove = ({ columnIndex, changeColumnIndex }: Props) => {
  const { boardId, columnId } = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const { data: board } = useQuery({
    queryKey: ["columns"],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();

      if (boardId) {
        const board = await boardService.findBoardById(accessToken, +boardId);

        if (board && columnId) {
          const columnIndex = board.columns.findIndex(
            (column) => column.id === +columnId
          );
          changeColumnIndex(columnIndex >= 0 ? columnIndex : 0);
        }

        return board;
      }
    },
  });

  return board ? (
    <div className="flex flex-col gap-3">
      <Label>Change Column</Label>
      <Select
        value={`${columnIndex}`}
        onValueChange={(value: string) => changeColumnIndex(+value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Column" />
        </SelectTrigger>
        <SelectContent className="z-[150]">
          {board?.columns.map((column, index) => (
            <SelectItem key={column.id} value={`${index}`}>
              {column.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ) : null;
};

export default JobViewEditMove;
