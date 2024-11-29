import Link from "next/link";
import LinkLayout from "@/components/layouts/LinkLayout";
import { REACT_DOCS_COMPONENTS_LINKS } from "@/constants/list-page-links";

export default function ReactDocsComponentsPage() {
  return (
    <LinkLayout>
      {REACT_DOCS_COMPONENTS_LINKS.map(({ href, slug }) => (
        <Link key={slug} href={`/react-docs/components/${href}`}>
          {slug}
        </Link>
      ))}
    </LinkLayout>
  );
}
