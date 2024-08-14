import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/navbar";

type Props = {
  children?: ReactNode;
  mainClassName?: string;
};

const Layout = ({ children, mainClassName = "" }: Props) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <header>
        <Navbar />
      </header>
      <main className={`grow ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
