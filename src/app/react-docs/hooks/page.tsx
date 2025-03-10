import Link from "next/link";
import LinkLayout from "@/components/layouts/LinkLayout";
import { REACT_DOCS_HOOKS_LINKS } from "@/constants/list-page-links";

export default function ReactDocsComponentsPage() {
  return (
    <LinkLayout>
      {REACT_DOCS_HOOKS_LINKS.map(({ href, slug }) => (
        <Link key={slug} href={`/react-docs/hooks/${href}`}>
          {slug}
        </Link>
      ))}
    </LinkLayout>
  );
}
