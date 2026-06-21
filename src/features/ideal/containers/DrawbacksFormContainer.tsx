import { useNavigate, Link } from "react-router-dom";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import { useSimpleForm } from "../hooks/useSimpleForm";
import TextareaForm from "../components/TextareaForm";
import type { DrawbacksFormData } from "../../../types/ideal";
import { idealData } from "../data/ideal";

export default function DrawbacksFormContainer() {
  const {
    formData,
    handleChange,
  } = useSimpleForm<DrawbacksFormData>({
    drawbacks: idealData.drawbacks,
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createIdeal(formData);
    navigate("/comparison");
  };

    return (
      <div className={styles.container}>
        <h1>理想を実現することで失うものはありますか？</h1>
        <div className={styles.idealCard}>
          <h2 className={styles.idealCardTitle}>あなたの理想</h2>
          <p className={styles.idealCardContent}>
            {idealData.context}
          </p>
        </div>
        <p className={styles.description}>理想を追いかけることで失うものや、払う必要がある代償を書いてください。<br/>理想には必ずコストやデメリットがあります。先に考えておくことで後悔しにくくなります。<br/>例：自由な時間が減る、勉強時間を確保する必要がある、失敗するかもしれない 等</p>
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
