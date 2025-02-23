import LinkLayout from "@/components/layouts/LinkLayout";
import Link from "next/link";

export default function LibsPracticePage() {
  return (
    <LinkLayout>
      <Link href="/libs/three-js">Three.js library react version practice</Link>
      <Link href="/libs/react-state-management">
        React state management practice
      </Link>
    </LinkLayout>
  );
}
