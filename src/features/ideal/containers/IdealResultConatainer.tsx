import { useState } from "react";
import { mockIdeal } from "../mocks/ideal";
import type { Ideal } from "../../../types/ideal";
import styles from "../../../styles/common.module.css";

export default function IdealResultContainer() {
  const [ideal, setIdeal] = useState<Ideal>(mockIdeal);

  return (
    <div>
      <h1 className={styles.title}>理想の叶える今日の一歩</h1>
      <div>
        <h3 className={styles.subtitle}>あなたの理想</h3>
        <p className={styles.description}>{ideal.context}</p>
        <h3 className={styles.subtitle}>なぜ理想をかなえたいのか？</h3>
        <p className={styles.description}>{ideal.benefits}</p>
        <h3 className={styles.subtitle}>理想を叶えると失うものは？</h3>
        <p className={styles.description}>{ideal.drawbacks}</p>
        <h3 className={styles.subtitle}>24時間以内に実行することは？</h3>
        <p className={styles.description}>{ideal.action}</p>
      </div>
    </div>
  );
}
