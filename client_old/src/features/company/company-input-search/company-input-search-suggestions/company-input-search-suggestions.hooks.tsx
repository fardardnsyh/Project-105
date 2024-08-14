import { CompanyModel } from "@/models/company-model";
import { Dispatch, SetStateAction } from "react";

export const useCompanyInputSearchSuggestions = (
  setCompany: Dispatch<SetStateAction<CompanyModel>>,
  setCompanySuggestions: Dispatch<SetStateAction<CompanyModel[]>>
) => {
  const selectCompany = (company: CompanyModel) => {
    setCompany(company);
    setCompanySuggestions([]);
  };

  const closeSuggestions = () => {
    console.log("CLOSING SUGGESTIONS");
    setCompanySuggestions([]);
  };

  return { selectCompany, closeSuggestions };
};
