import { CompanyModel } from "@/models/company-model";
import { PaginationResponse } from "@/models/pagination-response";
import { AxiosRequestConfig } from "axios";
import api from "./api";

const searchCompanies = (
  accessToken: string,
  companyName: string,
  timestamp: Date,
  size: number = 5,
  page: number = 1
): Promise<PaginationResponse<CompanyModel>> => {
  const config: AxiosRequestConfig = {
    url: "/api/v1/company",
    params: {
      timestamp: timestamp.toISOString(),
      page,
      size,
      companyName,
    },
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return api.callExternalApi<PaginationResponse<CompanyModel>>({ config });
};

const companyService = {
  searchCompanies,
};

Object.freeze(companyService);

export { companyService };
