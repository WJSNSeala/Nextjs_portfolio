import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/react-docs">Go To React Docs Test Page</Link>

        <Link href="/next-docs">Go To Next Docs Test Page</Link>

        <Link href="/css">Go to CSS Test Page</Link>

        <Link href="/html">Go to HTML Test Page</Link>
      </main>
    </div>
  );
}
