import React from "react";
import styles from "../styles/Input.module.scss"
export default function Input({ handleChange, value }) {
  return (
      <input
        onChange={handleChange}
        value={value}
        placeholder="Введите название пива"
        className={styles.input}
        required={true}
      />
  );
}
