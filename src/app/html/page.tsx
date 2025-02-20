import Link from "next/link";
import LinkLayout from "@/components/layouts/LinkLayout";
import { HTML_DOCS_LINKS } from "@/constants/list-page-links";

export default function HTMLDocsPage() {
  return (
    <LinkLayout>
      {HTML_DOCS_LINKS.map(({ href, slug }) => (
        <Link key={slug} href={`/html/${href}`}>
          {slug}
        </Link>
      ))}
    </LinkLayout>
  );
}
