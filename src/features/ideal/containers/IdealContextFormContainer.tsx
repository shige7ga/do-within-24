import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import IdealContextForm from "../components/IdealContextForm";
import { createIdeal } from "../hooks/createIdeal";
import styles from "../styles/idealForm.module.css";
import type { IdealContextFormData } from "../../../types/ideal";

export default function IdealContextFromContainer() {
  const [formData, setFormData] = useState<IdealContextFormData>({
    context: "",
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
    createIdeal(formData);
    navigate("/result");
  };

  return (
    <div className={styles.container}>
      <h1>理想を書く</h1>
      <IdealContextForm
        formData={formData}
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
