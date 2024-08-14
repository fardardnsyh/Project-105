export interface CreateJobModel {
  jobTitle: string;
  description: string;
  postUrl: string;
  columnId: number | null;
  hasCoverLetter: boolean;
  appliedOnCompanySite: boolean;
  postURL: string;
}
