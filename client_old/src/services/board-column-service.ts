import { AxiosRequestConfig } from "axios";
import api from "./api";
import { BoardColumnModel } from "@/models/board-column-model";

const deleteColumn = (
  accessToken: string,
  columnId: number
): Promise<{ message: string }> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/column/delete",
    method: "DELETE",
    params: {
      columnId,
    },
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<{ message: string }>({ config });
};

const createColumn = (
  accessToken: string,
  boardId: number,
  label: string
): Promise<BoardColumnModel> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/column/create-column",
    method: "PUT",
    params: {
      boardId,
      label,
    },
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<BoardColumnModel>({ config });
};

const boardColumnService = {
  deleteColumn,
  createColumn,
};

Object.freeze(boardColumnService);

export { boardColumnService };
