import LinkLayout from "@/components/layouts/LinkLayout";
import Link from "next/link";
import { REACT_STATE_MANAGEMENT_LIBS_LINKS } from "@/constants/list-page-links";

export default function LibsPracticePage() {
  return (
    <LinkLayout>
      {REACT_STATE_MANAGEMENT_LIBS_LINKS.map((link) => (
        <Link key={link.slug} href={`/libs/react-state-management${link.href}`}>
          {link.slug}
        </Link>
      ))}
    </LinkLayout>
  );
}
