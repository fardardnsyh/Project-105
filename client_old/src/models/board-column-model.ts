import { IconModel } from "./icon-model";
import { JobModel } from "./job-model";

export interface BoardColumnModel {
  id: number;
  label: string;
  icon: IconModel;
  order: number;
  jobs: JobModel[];
}
