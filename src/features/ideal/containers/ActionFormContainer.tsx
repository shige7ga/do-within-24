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
      <h1>理想を叶えるために24時間以内に実施できることは？</h1>
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
