import LinkLayout from "@/components/layouts/LinkLayout";
import Link from "next/link";

export default function LibsPracticePage() {
  return (
    <LinkLayout>
      <Link href="/libs/react-state-management/zustand">
        Zustand based state management practice
      </Link>
    </LinkLayout>
  );
}
