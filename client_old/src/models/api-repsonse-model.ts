import { ErrorModel } from "./error-model";

export type ApiResponse<T> = [T | null, ErrorModel | null];
