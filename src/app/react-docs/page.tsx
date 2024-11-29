import Link from "next/link";
import LinkLayout from "@/components/layouts/LinkLayout";
import { REACT_DOCS_LINKS } from "@/constants/list-page-links";

export default function ReactDocsPage() {
  return (
    <LinkLayout>
      {REACT_DOCS_LINKS.map(({ href, slug }) => (
        <Link key={slug} href={`/react-docs/${href}`}>
          {slug}
        </Link>
      ))}
    </LinkLayout>
  );
}
