import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link className={styles.navigate_button} href="/quiz">
          Start
        </Link>
      </div>
    </main>
  );
}
