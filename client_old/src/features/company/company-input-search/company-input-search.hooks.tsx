import { CompanyModel } from "@/models/company-model";
import { companyService } from "@/services/company-service";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useCompanyInputSearch = (
  company: CompanyModel,
  setCompany: Dispatch<SetStateAction<CompanyModel>>
) => {
  const [timestamp] = useState<Date>(new Date());
  const { getAccessTokenSilently } = useAuth0();
  const [companySuggestions, setCompanySuggestions] = useState<CompanyModel[]>(
    []
  );

  const changeCompany = (value: string) => {
    setCompany((curr: CompanyModel) => {
      return { ...curr, name: value };
    });
  };

  const searchCompanies = async () => {
    if (company.name.length > 2) {
      const accessToken = await getAccessTokenSilently();

      const response = await companyService.searchCompanies(
        accessToken,
        company.name,
        timestamp
      );

      console.log(response);
      return response.results;
    }
    return [];
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["companySuggestions", company, timestamp],
    queryFn: searchCompanies,
    enabled: !!company.name,
  });

  useEffect(() => {
    if (Array.isArray(data)) {
      setCompanySuggestions(data);
    }
  }, [data]);

  return {
    changeCompany,
    companySuggestions,
    setCompanySuggestions,
    error,
    isLoading,
  };
};
