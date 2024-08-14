import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  header: string;
  message: string | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
};

const AlertInformation = ({ header, message, icon }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (!message) {
    return null;
  }

  return isOpen ? (
    <Alert className="fixed flex items-center gap-3 top-5 left-1/2 -translate-x-1/2 w-fit z-[100]">
      {icon ? icon : null}
      <div>
        <AlertTitle>{header}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </div>

      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        <X size={16} />
      </Button>
    </Alert>
  ) : null;
};

export default AlertInformation;
