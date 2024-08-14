import { buttonVariants } from "@/components/ui/button";
import Container from "@/layout/container/container";
import LayoutLanding from "@/layout/layout-landing/layout-landing";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <LayoutLanding>
      <Container className="py-10">
        <div className="flex items-center flex-col gap-5 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold">Page Not Found</h1>
          <p className="dark:text-stone-400 text-stone-500 max-w-xl text-center">
            Uh oh, we can't seem to find the page you're looking for. Try going
            back to the previous page or to the home page.
          </p>
          <Link className={buttonVariants()} to="/">
            Go Home
          </Link>
        </div>
      </Container>
    </LayoutLanding>
  );
};

export default NotFound;
