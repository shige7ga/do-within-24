import { useNavigate, Link } from "react-router-dom";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import { useSimpleForm } from "../hooks/useSimpleForm";
import TextareaForm from "../components/TextareaForm";
import type { DrawbacksFormData } from "../../../types/ideal";

export default function DrawbacksFormContainer() {
  const {
    formData,
    handleChange,
  } = useSimpleForm<DrawbacksFormData>({
    drawbacks: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createIdeal(formData);
    navigate("/comparison");
  };

    return (
      <div className={styles.container}>
        <h1>理想を叶えることで生じるデメリットは何でしょう？</h1>
        <TextareaForm
          fieldName="drawbacks"
          value={formData.drawbacks}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <div className={styles.cancelContainer}>
          <Link to="/benefits" className={styles.cancelLink}>
            前の画面に戻る
          </Link>
        </div>
      </div>
    );
}
