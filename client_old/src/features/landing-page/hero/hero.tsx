import { useAuthLoginButton } from "@/features/auth/auth-login-button/auth-login-button.hooks";
import Container from "@/layout/container/container";
import LandingNavbar from "@/layout/layout-landing/landing-navbar/landing-navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  const { handleLogin } = useAuthLoginButton();
  return (
    <section className="h-[80vh] relative overflow-hidden">
      <header>
        <LandingNavbar />
      </header>
      <Container className="flex justify-start items-center h-full">
        <div className="text-start flex flex-col gap-10 -mt-[10%] z-50">
          <div>
            <h1 className="text-5xl font-bold mb-3">Simplify Your Job Hunt</h1>
            <p className="text-slate-500 text-xl font-semibold">
              Track Your Job Applications Effortlessly and For Free.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="max-w-xl text-slate-500">
              Say goodbye to cluttered spreadsheets and costly subscription
              fees. Our Job Application Tracker is designed to streamline your
              job search process with an intuitive, user-friendly interface.
              Manage applications, follow-ups, and offers in one place, so you
              can focus on landing your dream job.
            </p>
            <div className="flex gap-3 items-center">
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2.5 rounded-md drop-shadow duration-200 text-sm"
              >
                Sign up for free
              </Link>
              <button
                className="px-3 py-2.5 border hover:bg-slate-100 rounded-md duration-200 text-sm"
                onClick={handleLogin}
              >
                Log in here
              </button>
            </div>
          </div>
        </div>
        {/* <div className="absolute w-[80rem] h-[80rem] rounded-3xl drop-shadow-2lxl bg-foreground z-[10] -right-[20%] rotate-[50deg] -top-[130%]"></div>
        <div className="absolute w-[80rem] h-[80rem] rounded-3xl drop-shadow-2lxl bg-primary z-[9] -right-[18%] rotate-[55deg] -top-[130%]"></div> */}
      </Container>
    </section>
  );
};

export default Hero;
