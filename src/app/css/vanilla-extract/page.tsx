import Link from "next/link";
import { linksLayout } from "./vanilla-layout.css";

const vanilaExtractTitles = [
  {
    title: "Overview",
    slug: "overview",
  },
];

export default function VanillaExtractListPage() {
  return (
    <div className={linksLayout}>
      {vanilaExtractTitles.map(({ title, slug }) => (
        <Link key={slug} href={`/css/vanilla-extract/${slug}`}>
          {title}
        </Link>
      ))}
    </div>
  );
}
