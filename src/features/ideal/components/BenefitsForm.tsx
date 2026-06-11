import type React from "react";
import type { BenefitsFormData } from "../../../types/ideal";
import styles from "../styles/idealForm.module.css";

type Props = {
  formData: BenefitsFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function BenefitsForm({ formData, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <textarea
          name="benefits"
          value={formData.benefits}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        送信する
      </button>
    </form>
  );
};
