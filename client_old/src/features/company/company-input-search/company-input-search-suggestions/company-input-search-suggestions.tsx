import { Button } from "@/components/ui/button";
import { CompanyModel } from "@/models/company-model";
import { Dispatch, SetStateAction } from "react";
import { useCompanyInputSearchSuggestions } from "./company-input-search-suggestions.hooks";
import OutsideAlerter from "@/components/outside-alerter/outside-alerter";

type Props = {
  setCompany: Dispatch<SetStateAction<CompanyModel>>;
  companySuggestions: CompanyModel[] | undefined;
  setCompanySuggestions: Dispatch<SetStateAction<CompanyModel[]>>;
};

const CompanyInputSearchSuggestions = ({
  setCompany,
  companySuggestions,
  setCompanySuggestions,
}: Props) => {
  const { selectCompany, closeSuggestions } = useCompanyInputSearchSuggestions(
    setCompany,
    setCompanySuggestions
  );

  if (!companySuggestions?.length) {
    return null;
  }

  return (
    <OutsideAlerter
      className="absolute top-[110%] left-0 w-full bg-background border rounded drop-shadow"
      executable={closeSuggestions}
    >
      <ul className="flex flex-col gap-5">
        {companySuggestions?.map((company) => (
          <li key={company?.id}>
            <Button
              className="w-full text-left justify-start"
              onClick={() => selectCompany(company)}
              variant="ghost"
            >
              {company.name}
            </Button>
          </li>
        ))}
      </ul>
    </OutsideAlerter>
  );
};

export default CompanyInputSearchSuggestions;
