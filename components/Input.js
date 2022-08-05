import React from "react";
import styles from "../styles/Input.module.scss";
export default function Input({ handleChange, value, text }) {
  return (
    <input
      onChange={handleChange}
      value={value}
      placeholder={text}
      className={styles.input}
      required={true}
    />
  );
}
