import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="border-r w-64">
      <div className="p-3 border-b h-12">
        <h1 className="font-semibold">Career Quest</h1>
      </div>
      <ul className="p-3">
        <li>
          <Link
            to="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full text-start justify-start"
            )}
          >
            <span className="mr-1">🏠</span>Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
