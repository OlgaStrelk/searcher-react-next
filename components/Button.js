import React from "react";
import classnames from "classnames";
import styles from "../styles/Button.module.scss";

export default function Button({ text, inputValue, isButtonActive }) {
  return (
    <button
      className={classnames(
        styles.button,
        inputValue === "" && styles.disabled
      )}
      disabled={!isButtonActive}
    >
      {text}
    </button>
  );
}
