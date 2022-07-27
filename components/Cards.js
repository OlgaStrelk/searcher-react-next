import React from "react";
import Link from "next/link";

import styles from "../styles/cards.module.scss";

export default function Cards(props) {
  const { currentTableData } = props;
  console.log(currentTableData);

  const truncate = (input) =>
    input.length > 140 ? `${input.substring(0, 140)}...` : input;

  return (
    <>
      {currentTableData?.map((card) => (
        <li key={card.id} className={styles.listItem}>
          <Link href={`/${card.id}`}>
            <a className={styles.link}>
              <div className={styles.cards}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={card.link}
                    alt={card.title}
                  />
                </div>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.subtitle}>{truncate(card.subtitle)}</p>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </>
  );
}
