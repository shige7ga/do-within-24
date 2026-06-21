import { useNavigate, Link } from "react-router-dom";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import { useSimpleForm } from "../hooks/useSimpleForm";
import TextareaForm from "../components/TextareaForm";
import type { IdealContextFormData } from "../../../types/ideal";
import { idealData } from "../data/ideal";

export default function IdealContextFromContainer() {
  const {
    formData,
    handleChange,
  } = useSimpleForm<IdealContextFormData>({
    context: idealData.context,
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createIdeal(formData);
    navigate("/benefits");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>理想を書く</h1>
      <p className={styles.description}>あなたが実現したいこと、なりたい自分、手に入れたい未来を書いてください。<br/>例：世界一周旅行をしたい、英語を話せるようになりたい、自分で作ったアプリを公開したい 等</p>
      <TextareaForm
        fieldName="context"
        value={formData.context}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className={styles.cancelContainer}>
        <Link to="/" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
  );
}
