import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const InterviewBoardHeaderNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Career Quest</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default InterviewBoardHeaderNav;
