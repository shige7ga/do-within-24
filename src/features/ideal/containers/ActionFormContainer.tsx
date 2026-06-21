import { useNavigate, Link } from "react-router-dom";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import { useSimpleForm } from "../hooks/useSimpleForm";
import TextareaForm from "../components/TextareaForm";
import type { ActionFormData } from "../../../types/ideal";
import { idealData } from "../data/ideal";

export default function ActionFormContainer() {
  const {
    formData,
    handleChange,
  } = useSimpleForm<ActionFormData>({
    action: idealData.action,
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createIdeal(formData);
    navigate("/result");
  };

    return (
      <div className={styles.container}>
      <h1 className={styles.title}>24時間以内に実施できることは？</h1>
      <p className={styles.description}>理想に近づくために、24時間以内に実行できる小さな行動を書いてください。<br/>完璧な計画ではなく、「今すぐできること」を考えるのがポイントです。<br />無理しないとできないことではなく、やろうと思えば必ずできることを考えてください。<br/>例：英語学習アプリをインストールする、世界一周旅行についてサイトを検索する、アプリのアイデアをメモする 等</p>
      <TextareaForm
        fieldName="action"
        value={formData.action}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className={styles.cancelContainer}>
        <Link to="/comparison" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
    );
}
