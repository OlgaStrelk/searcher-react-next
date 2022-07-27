import React from "react";
import Link from "next/link";

export default function Card(props) {
  const { currentTableData } = props;
  console.log(currentTableData);

  const truncate = (input) =>
    input.length > 140 ? `${input.substring(0, 140)}...` : input;

  return (
    <>
      {currentTableData?.map((card) => (
        <li key={card.id}>
          <Link href={`/${card.id}`}>
            <a>
              <div className="Card">
                <img className="Card-image" src={card.link} alt={card.title} />
                <h3 className="Card-title">{card.title}</h3>
                <p className="Card-subtitle">{truncate(card.subtitle)}</p>
              </div>
            </a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        .Card {
          width: 276px;
          font-size: 14px;
          margin-top: 30px;
          cursor: pointer;
        }

        .Card:hover {
          opacity: 0.7;
        }

        .Card-image {
          width: 100%;
          height: 180px;
          object-fit: contain;
        }

        .Card-title {
          text-align: center;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 0;
          min-height: 38px;
        }

        .Card-subtitle {
          margin-top: 5px;
          color: #767676;
        }
      `}</style>
    </>
  );
}
