import { Link } from "react-router-dom";
import IdealResultContainer from "../../features/ideal/containers/IdealResultConatainer";
import styles from "../../styles/common.module.css";

export default function ResultPage() {
  return (
    <div className={styles.container}>
      <IdealResultContainer />
      <Link to="/" className={styles.link}>
        トップに戻る
      </Link>
    </div>
  );
}
