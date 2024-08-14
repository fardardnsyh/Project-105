import { ReactNode } from "react";

export interface NavLink {
  name: string;
  href?: string;
  className?: string;
  description?: string;
  children?: NavLink[];
  element?: ReactNode;
}
