import { idealData } from "../data/ideal";
import styles from "../styles/result.module.css";

export default function IdealResultContainer() {
  const today = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            理想に近づく今日の一歩
          </h1>

          <p className={styles.date}>
            {today}
          </p>
        </div>

        <section className={styles.idealSection}>
          <p className={styles.idealLabel}>
            あなたの理想
          </p>

          <p className={styles.idealText}>
            {idealData.context}
          </p>
        </section>

        <div className={styles.comparisonGrid}>
          <section
            className={`${styles.card} ${styles.benefitCard}`}
          >
            <h2 className={styles.cardTitle}>
              理想を叶えるメリット
            </h2>

            <p className={styles.cardContent}>
              {idealData.benefits}
            </p>
          </section>

          <section
            className={`${styles.card} ${styles.drawbackCard}`}
          >
            <h2 className={styles.cardTitle}>
              理想の代償・デメリット
            </h2>

            <p className={styles.cardContent}>
              {idealData.drawbacks}
            </p>
          </section>
        </div>

        <section className={styles.actionSection}>
          <p className={styles.actionLabel}>
            24時間以内のアクション
          </p>

          <p className={styles.actionText}>
            {idealData.action}
          </p>
        </section>

        <p className={styles.footer}>
          Start within 24 hours.
        </p>
      </div>
  );
}
