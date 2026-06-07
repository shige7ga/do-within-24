import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>24時間で人生が動き出すアプリ</h1>
      <p className={styles.description}>
        現状から抜け出して、理想の自分に近づく、超自己啓発アプリです。あなたの人生が24時間以内に動き始めます。
      </p>

      <Link to="/" className={styles.link}>
        理想の自分になる
      </Link>
    </div>
  );
}
