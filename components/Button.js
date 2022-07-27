import React from "react";
import classnames from "classnames";
import styles from "../styles/button.module.scss";

export default function Button({ text, inputValue, isButtonActive }) {
  return (
    <button
      className={styles.button}
      // {classnames({button}, {
      //   disabled: inputValue === "",
      // })}
      disabled={!isButtonActive}
    >
      {text}
    </button>
  );
}
