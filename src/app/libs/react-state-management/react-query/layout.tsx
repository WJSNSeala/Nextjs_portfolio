import ReactQueryProviders from "@/constants/react-query/ReactQueryProviders";
import type { PropsWithChildren } from "react";

export default function ReactQueryDefaultLayout({
  children,
}: PropsWithChildren) {
  return <ReactQueryProviders>{children}</ReactQueryProviders>;
}
