import React from "react";
import styles from "../styles/Form.module.scss"
export default function Form({ children, handleSubmit }) {
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>{children}</form>
    </>
  );
}
