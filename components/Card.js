import React from "react";

export default function Card(props) {
  const { id, link, title, subtitle, getCardId, onCardClick } = props;

  const handleClick = (e) => {
    getCardId(id);
    onCardClick(true);
  };

  const truncate = (input) =>
    input.length > 140 ? `${input.substring(0, 140)}...` : input;

  return (
    <>
      <div className="Card" onClick={handleClick}>
        <img className="Card-image" src={link} alt={title} />
        <h3 className="Card-title">{title}</h3>
        <p className="Card-subtitle">{truncate(subtitle)}</p>
      </div>

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
