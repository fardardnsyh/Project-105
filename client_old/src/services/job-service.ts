import { JobModel } from "@/models/job-model";
import { AxiosRequestConfig } from "axios";
import api from "./api";
import { CreateJobModel } from "@/models/create-job-model";
import { CompanyModel } from "@/models/company-model";

const createJob = (
  accessToken: string,
  createJob: CreateJobModel,
  company: CompanyModel
): Promise<JobModel> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/job",
    method: "POST",
    data: {
      ...createJob,
      companyName: company.name,
    },
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<JobModel>({ config });
};

const updateJob = (accessToken: string, job: JobModel): Promise<JobModel> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/job/update",
    method: "PUT",
    data: {
      job,
    },
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<JobModel>({ config });
};

const deleteJob = (accessToken: string, jobId: number): Promise<JobModel> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/job/delete",
    method: "DELETE",
    params: {
      jobId,
    },
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<JobModel>({ config });
};

const findJobById = (accessToken: string, jobId: number): Promise<JobModel> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/job/find",
    params: {
      jobId,
    },
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<JobModel>({ config });
};

const jobService = {
  createJob,
  findJobById,
  updateJob,
  deleteJob,
};

Object.freeze(jobService);

export { jobService };
