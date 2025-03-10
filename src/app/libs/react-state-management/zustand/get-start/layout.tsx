import { ReactNode } from "react";
import { BearStoreProvider } from "./BearStoreProvider";

export default function ZustandGetStartLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <BearStoreProvider>{children}</BearStoreProvider>;
}
