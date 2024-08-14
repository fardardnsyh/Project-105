import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  header?: string;
  message?: string;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
};

const AlertLoading = ({
  isLoading,
  header = "Loading",
  message = "Loading, just one moment...",
  icon,
}: Props) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Alert className="fixed top-5 left-1/2 -translate-x-1/2 w-fit z-[100]">
      {icon}
      <AlertTitle>{header}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertLoading;
