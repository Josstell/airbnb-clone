import React from "react"

const Card = ({ src, title, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
      <style jsx>{`
        .card {
          margin: 10px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
          transition: transform 100ms ease-in;
          cursor: pointer;
        }

        .card:hover {
          transform: scale(1.07);
        }

        .card > img {
          object-fit: fill;
          min-width: 300px;
          min-height: 200px;
          width: 100%;
        }
        .card_info {
          margin-top: -9px;
          border-radius: 10px;
          padding: 20px;
          padding-top: 20px;
          border: 1;
        }

        .card_info > h2 {
          font-size: 18px;
          font-weight: 600;
        }

        .card_info > h4 {
          font-size: 14px;
          font-weight: 300;
          margin-top: 8px;
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  )
}

export default Card
