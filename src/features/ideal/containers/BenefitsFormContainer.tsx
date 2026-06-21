import { useNavigate, Link } from "react-router-dom";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import { useSimpleForm } from "../hooks/useSimpleForm";
import TextareaForm from "../components/TextareaForm";
import type { BenefitsFormData } from "../../../types/ideal";
import { idealData } from "../data/ideal";

export default function BenefitsFormContainer() {
  const {
    formData,
    handleChange,
  } = useSimpleForm<BenefitsFormData>({
    benefits: idealData.benefits,
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createIdeal(formData);
    navigate("/drawbacks");
  };

    return (
      <div className={styles.container}>
      <h1 className={styles.title}>なぜ、その理想を実現したいですか？</h1>
      <div className={styles.idealCard}>
        <h2 className={styles.idealCardTitle}>あなたの理想</h2>
        <p className={styles.idealCardContent}>
          {idealData.context}
        </p>
      </div>
      <p className={styles.description}>この理想を実現したい理由や、達成することで得られるメリットを記入してください。<br/>「なぜ？」を深掘りすると、本当に大切にしたい価値観が見えてきます。<br/>例：好きな場所で自由に働きたい、海外の人とも交流したい、自分に自信を持ちたい 等</p>
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
