import { ReactNode } from "react";
import { linksLayout } from "./link-layout.css";

export default function LinkLayout({ children }: { children: ReactNode }) {
  return <div className={linksLayout}>{children}</div>;
}
