import { buttonVariants } from "@/components/ui/button";
import { useAuthLoginButton } from "@/features/auth/auth-login-button/auth-login-button.hooks";
import AuthLogoutButton from "@/features/auth/auth-logout-button/auth-logout-button";
import { useAuthSignupButton } from "@/features/auth/auth-signup-button/auth-signup-button.hooks";
import Container from "@/layout/container/container";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const { isAuthenticated } = useAuth0();
  const { handleSignUp } = useAuthSignupButton();
  const { handleLogin } = useAuthLoginButton();

  return (
    <nav className="py-3">
      <Container className="flex justify-between items-center gap-5">
        <ul className="flex items-center gap-3">
          <li>
            <Link to="/">
              <h1 className="font-semibold text-lg">Career Quest</h1>
            </Link>
          </li>
        </ul>
        {isAuthenticated ? (
          <ul className="flex items-center gap-3 z-50">
            <li>
              <Link to="/" className={buttonVariants({ variant: "ghost" })}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <AuthLogoutButton variant="outline">Log out</AuthLogoutButton>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center gap-3 z-50">
            <li>
              <button
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2.5 rounded-md drop-shadow duration-200 text-sm"
                onClick={handleLogin}
              >
                Log in
              </button>
            </li>
            <li>
              <button
                onClick={handleSignUp}
                className="px-3 py-2.5 border hover:bg-slate-100 rounded-md duration-200 text-sm"
              >
                Sign up for free
              </button>
            </li>
          </ul>
        )}
      </Container>
    </nav>
  );
};

export default LandingNavbar;
