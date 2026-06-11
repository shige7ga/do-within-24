import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createBenefits } from "../hooks/createBenefits";
import styles from "../styles/idealForm.module.css";
import type { BenefitsFormData } from "../../../types/ideal";
import TextareaForm from "../components/TextareaForm";

export default function BenefitsFormContainer() {
  const [formData, setFormData] = useState<BenefitsFormData>({
    benefits: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createBenefits(formData);
      navigate("/");
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
