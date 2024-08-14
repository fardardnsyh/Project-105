import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CompanyModel } from "@/models/company-model";
import { parseAndCapitalize } from "@/utils/name-formatter";

type Props = {
  company: CompanyModel | null;
};

const BoardColumnJobCompany = ({ company }: Props) => {
  if (!company) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-4 h-4 drop-shadow">
        <AvatarImage src={company.imageUrl} />
        <AvatarFallback>{parseAndCapitalize(company.name)}</AvatarFallback>
      </Avatar>
      <p>{company.name}</p>
    </div>
  );
};

export default BoardColumnJobCompany;
