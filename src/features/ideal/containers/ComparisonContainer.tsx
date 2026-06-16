import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/idealForm.module.css";
import { createIdeal } from "../hooks/createIdeal";

export default function ComparisonContainer() {
  const navigate = useNavigate();
  const handleDemerit = () => {
    createIdeal({
      action: "この理想のことは一旦考えない",
    });
    navigate("/result");
  }

  return (
    <div className={styles.container}>
      <h1>メリットとデメリットを比較してみる</h1>

      <div>
        <Link to="/action" className={styles.submitButton}>
          メリットの方が大きい
        </Link>
      </div>

      <div>
        <button
          onClick={handleDemerit}
          className={styles.submitButton}
        >
          デメリットの方が大きい
        </button>
      </div>

      <div className={styles.cancelContainer}>
        <Link to="/drawbacks" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
  );
}
