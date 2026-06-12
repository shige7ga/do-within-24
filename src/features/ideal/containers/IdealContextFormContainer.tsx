import { useNavigate, Link } from "react-router-dom";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import { useSimpleForm } from "../hooks/useSimpleForm";
import TextareaForm from "../components/TextareaForm";
import type { IdealContextFormData } from "../../../types/ideal";

export default function IdealContextFromContainer() {
  const {
    formData,
    handleChange,
  } = useSimpleForm<IdealContextFormData>({
    context: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createIdeal(formData);
    navigate("/benefits");
  };

  return (
    <div className={styles.container}>
      <h1>理想を書く</h1>
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
