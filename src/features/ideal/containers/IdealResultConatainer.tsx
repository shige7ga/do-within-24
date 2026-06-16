import { mockIdeal } from "../mocks/ideal";
import styles from "../../../styles/common.module.css";

export default function IdealResultContainer() {
  return (
    <div>
      <h1 className={styles.title}>理想に近づく今日の一歩</h1>
      <div>
        <h3 className={styles.subtitle}>あなたの理想</h3>
        <p className={styles.description}>{mockIdeal.context}</p>
        <h3 className={styles.subtitle}>なぜ理想をかなえたいのか？</h3>
        <p className={styles.description}>{mockIdeal.benefits}</p>
        <h3 className={styles.subtitle}>理想を叶えると失うものは？</h3>
        <p className={styles.description}>{mockIdeal.drawbacks}</p>
        <h3 className={styles.subtitle}>24時間以内に実行することは？</h3>
        <p className={styles.description}>{mockIdeal.action}</p>
      </div>
    </div>
  );
}
