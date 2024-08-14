import { ReactNode } from "react";
import Container from "../container/container";

type Props = {
  children?: ReactNode;
};

const LayoutLanding = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-white text-black">
      <main className="grow">{children}</main>
      <div className="p-9 bg-foreground-muted text-muted-foreground border-slate-300 border-t">
        <Container>
          <ul className="flex justify-between">
            <li>&copy; Career Quest 2023</li>
            <li>
              Built by{" "}
              <a
                href="https://github.com/admclamb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anthony Mclamb
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default LayoutLanding;
