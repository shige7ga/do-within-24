import { Link } from "react-router-dom";
import styles from "../styles/idealForm.module.css";

export default function ComparisonContainer() {
  return (
    <div className={styles.container}>
    <h1>メリットとデメリットを比較してみる</h1>

    <div >
      <Link to="/action" className={styles.submitButton}>
        メリットの方が大きい
      </Link>
    </div>
    <div className={styles.cancelContainer}>
      <Link to="/drawbacks" className={styles.cancelLink}>
        前の画面に戻る
      </Link>
    </div>
  </div>
  );
}
