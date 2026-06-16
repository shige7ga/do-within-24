import { useNavigate, Link } from "react-router-dom";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import { useSimpleForm } from "../hooks/useSimpleForm";
import TextareaForm from "../components/TextareaForm";
import type { BenefitsFormData } from "../../../types/ideal";

export default function BenefitsFormContainer() {
  const {
      formData,
      handleChange,
    } = useSimpleForm<BenefitsFormData>({
      benefits: "",
    });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createIdeal(formData);
    navigate("/drawbacks");
  };

    return (
      <div className={styles.container}>
      <h1>理想を叶えたら得られるメリットは何でしょう？</h1>
      <TextareaForm
        fieldName="benefits"
        value={formData.benefits}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className={styles.cancelContainer}>
        <Link to="/ideal" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
    );
}
