import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CompanyModel } from "@/models/company-model";
import { Dispatch, SetStateAction } from "react";
import { useCompanyInputSearch } from "./company-input-search.hooks";
import ErrorAlert from "@/errors/error-alert/error-alert";

type Props = {
  company: CompanyModel;
  setCompany: Dispatch<SetStateAction<CompanyModel>>;
};

const CompanyInputSearch = ({ company, setCompany }: Props) => {
  const { changeCompany, error } = useCompanyInputSearch(company, setCompany);
  return (
    <div className="flex flex-col gap-3 relative">
      <ErrorAlert error={error} />
      <Label htmlFor="company-name">Company Name</Label>
      <Input
        id="company-name"
        placeholder="Company Name"
        value={company.name}
        onChange={(e) => changeCompany(e.target.value)}
      />
      {/* <CompanyInputSearchSuggestions
        companySuggestions={companySuggestions}
        setCompany={setCompany}
        setCompanySuggestions={setCompanySuggestions}
      /> */}
    </div>
  );
};

export default CompanyInputSearch;
