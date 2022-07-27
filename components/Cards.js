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
              <div className="card">
                <div className="container">
                  <img className="image" src={card.link} alt={card.title} />
                </div>
                <h3 className="title">{card.title}</h3>
                <p className="subtitle">{truncate(card.subtitle)}</p>
              </div>
            </a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        .card {
          width: 276px;
          font-size: 14px;
          margin-top: 30px;
          cursor: pointer;
        }

        .card:hover {
          opacity: 0.7;
        }

        .container {
          width: 100%;
          height: 180px;
        }

        .image {
          height: 100%;
        }

        .title {
          text-align: center;
          font-weight: 700;
          margin-top: 20px;
          margin-bottom: 0;
          min-height: 38px;
        }

        .subtitle {
          margin-top: 5px;
          color: #767676;
        }
      `}</style>
    </>
  );
}
