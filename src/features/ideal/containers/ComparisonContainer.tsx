import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/idealForm.module.css";
import { createIdeal } from "../hooks/createIdeal";
import { idealData } from "../data/ideal";

export default function ComparisonContainer() {
  const navigate = useNavigate();
  const handleDemerit = () => {
    createIdeal({
      action: "この理想について\n一旦考えない",
    });
  navigate("/result");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>メリットとデメリットを比べて、どう感じますか？</h1>
      <p className={styles.description}>デメリットも理解した上で、それでも理想を実現したいと思いますか？<br/>今の正直な気持ちを選んでください。<br />理想を実現するかどうかに正解はありません。一度立ち止まって考えることも重要です。</p>

      <div className={styles.comparisonContainer}>
        <div className={`${styles.card} ${styles.cardBenefit}`}>
          <h2 className={styles.cardTitle}>メリット</h2>

          <p className={styles.cardContent}>
            {idealData.benefits}
          </p>

          <button
            onClick={() => navigate("/action")}
            className={`${styles.comparisonSubmitButton} ${styles.benefitButton}`}
          >
            メリットの方が大きい
          </button>
        </div>

        <div className={`${styles.card} ${styles.cardDrawback}`}>
          <h2 className={styles.cardTitle}>デメリット</h2>

          <p className={styles.cardContent}>
            {idealData.drawbacks}
          </p>

          <button
            onClick={handleDemerit}
            className={`${styles.comparisonSubmitButton} ${styles.drawbackButton}`}
          >
            デメリットの方が大きい
          </button>
        </div>
      </div>

      <div className={styles.cancelContainer}>
        <Link to="/drawbacks" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
  );
}
