import { Link } from "react-router-dom";
import styles from "../../styles/common.module.css";

export default function IdealPage() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>理想を書く</h1>
        <Link to="/" className={styles.link}>
          戻る
        </Link>
      </div>
    </div>
  );
}
