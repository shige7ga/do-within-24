// SingleTextareaForm.tsx
import type React from "react";
import styles from "../styles/idealForm.module.css";

type Props = {
  fieldName: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function TextareaForm({ fieldName, value, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <textarea
          name={fieldName}
          value={value}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        次へ進む
      </button>
    </form>
  );
}
