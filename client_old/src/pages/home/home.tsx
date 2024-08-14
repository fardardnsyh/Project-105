import { buttonVariants } from "@/components/ui/button";
import Hero from "@/features/landing-page/hero/hero";
import Container from "@/layout/container/container";
import LayoutLanding from "@/layout/layout-landing/layout-landing";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import landing1 from "./undraw_learning_sketching_nd4f.svg";
import landing2 from "./undraw_projections_re_ulc6.svg";

const Home = () => {
  return (
    <LayoutLanding>
      <Hero />
      <section className="border-slate-300 border-t  bg-slate-100">
        <Container className="grid grid-cols-1 lg:grid-cols-2 py-20 gap-20">
          <section className="h-[35rem] w-full overflow-hidden">
            <img
              src={landing1}
              alt="Ovewhelming computer image"
              className="w-full h-full"
            />
          </section>
          <section className="flex flex-col justify-center -mt-[5%] gap-5">
            <h3 className="text-2xl font-bold">
              All Your Job Applications, One Dashboard
            </h3>
            <p className="text-slate-500">
              Keep track of every application, from initial submission to final
              decision, with our comprehensive dashboard. Visualize your job
              search progress through interactive charts and filters that allow
              you to sort applications by status, date, company, and role. Our
              dashboard is designed to give you a complete overview at a glance,
              replacing confusing spreadsheets and notes. Stay organized and
              never miss a follow-up or deadline again.
            </p>
            <div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white hover:text-white px-3 py-2.5 rounded-md drop-shadow duration-200 text-sm">
                Sign up for free
              </button>
            </div>
          </section>
          <section className="flex flex-col justify-center gap-5">
            <h3 className="text-2xl font-bold">
              Free to Use with Flexible Upgrades
            </h3>
            <p className="text-slate-500">
              Begin your job search journey with our free online account,
              offering essential tracking functionalities to organize your
              applications efficiently. When you&apos;re ready for more, unlock
              unlimited potential by providing your MongoDB URL or by cloning
              and running our repository locally. This unique flexibility allows
              you to maintain full control over your data while enjoying the
              same great interface and features. Our platform is committed to
              transparency and adaptability, ensuring you have the tools you
              need, the way you need them, at no cost.
            </p>
            <div>
              <Link
                to="/demo"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "drop-shadow"
                )}
              >
                Try out a demo account
              </Link>
            </div>
          </section>
          <section className="h-[35rem] w-full overflow-hidden">
            <img
              src={landing2}
              alt="Ovewhelming computer image"
              className="w-full h-full"
            />
          </section>
        </Container>
      </section>
    </LayoutLanding>
  );
};

export default Home;
