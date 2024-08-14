import { BoardColumnModel } from "./board-column-model";

export interface BoardModel {
  id: number;
  title: string;
  columns: BoardColumnModel[];
  createdAt: Date;
  updatedAt: Date;
}
