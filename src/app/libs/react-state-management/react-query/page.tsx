import LinkLayout from "@/components/layouts/LinkLayout";
import Link from "next/link";

export default function ReactQueryPage() {
  const reactQueryPageBaseLikn = "/libs/react-state-management/react-query";

  return (
    <LinkLayout>
      <h1>React Query</h1>
      <p>React Query is often used for data fetching and caching.</p>
      <p>It is used to fetch data from the server and cache it locally.</p>

      <h2>React Query Official Docs</h2>
      <Link href={`${reactQueryPageBaseLikn}/overview`}>Overview</Link>
    </LinkLayout>
  );
}
