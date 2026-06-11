import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BenefitsForm from "../components/BenefitsForm";
import { createBenefits } from "../hooks/createBenefits";
import styles from "../styles/idealForm.module.css";
import type { BenefitsFormData } from "../../../types/ideal";

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
      <BenefitsForm
        formData={formData}
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
