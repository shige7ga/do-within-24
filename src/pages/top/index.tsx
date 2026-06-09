import { Link } from "react-router-dom";
import styles from "../../styles/common.module.css";

export default function TopPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>24時間で人生が動き出すアプリ</h1>
      <p className={styles.description}>
        一歩を踏み出し、理想の自分に近づく<br />
        超自己啓発アプリです。<br />
        あなたの人生が24時間以内に動き始めます。
      </p>

      <Link to="/ideal" className={styles.link}>
        理想への一歩を踏み出す
      </Link>
      {/* テストの為、いったん表示。後で削除予定 */}
      <Link to="/result" className={styles.link}>
        結果を見る
      </Link>
    </div>
  );
}
