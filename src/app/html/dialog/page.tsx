import Link from "next/link";
import LinkLayout from "@/components/layouts/LinkLayout";
import { LinkData } from "@/constants/list-page-links";

const DIALOG_LINKS: LinkData[] = [
  {
    href: "/only-html-non-dialog",
    slug: "Only HTML (non-dialog)",
  },
  {
    href: "/show-modal-dialog",
    slug: "Show Modal Dialog",
  },
  {
    href: "/dialog-animation",
    slug: "Dialog Animation",
  },
];

export default function DialogTestPage() {
  return (
    <LinkLayout>
      {DIALOG_LINKS.map(({ href, slug }) => (
        <Link key={slug} href={`/html/dialog/${href}`}>
          {slug}
        </Link>
      ))}
    </LinkLayout>
  );
}
