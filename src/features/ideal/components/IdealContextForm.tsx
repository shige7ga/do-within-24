import type React from "react";
import type { IdealContextFormData } from "../../../types/ideal";
import styles from "../styles/idealForm.module.css";

type Props = {
  formData: IdealContextFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function IdealContextForm({ formData, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <textarea
          name="context"
          value={formData.context}
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
