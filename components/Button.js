import React from "react";
import classnames from "classnames";

export default function Button({ text, inputValue, isButtonActive }) {
  return (
    <>
      <button
        className={classnames("Button", {
          disabled: inputValue === "",
        })}
        disabled={!isButtonActive}
      >
        {text}
      </button>
      <style jsx>
        {`
          .Button {
            text-align: center;
            background-color: #000;
            color: #fff;
            width: 170px;
            height: 54px;
            font-size: 14px;
            border: 0;
            border-radius: 3px;
            cursor: pointer;
          }

          .Button:hover {
            opacity: 0.7;
          }

          .Button.disabled {
            background-color: grey;
          }

          .Button.disabled:hover {
            opacity: 1;
            cursor: default;
          }
        `}
      </style>
    </>
  );
}
