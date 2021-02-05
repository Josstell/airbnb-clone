import React from "react"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .searchResult {
          display: flex;
          position: relative;
          margin: 20px;
          padding: 20px;
          border-bottom: 1px solid lightgray;
          cursor: pointer;
        }

        .searchResult:hover {
          opacity: 0.8;
        }

        .searchResult > img {
          height: 200px;
          width: 350px;
          border-radius: 10px;
          overflow: hidden;
        }

        .searchResult__info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 20px;
        }

        .searchResult__heart {
          position: absolute;
          top: 20px;
          right: 40px;
        }

        .searchResult__infoTop {
          width: 40vw;
        }

        .searchResult__infoTop > h3 {
          font-weight: 300;
          margin-top: 10px;
        }

        .searchResult__infoTop > p {
          margin-top: 10px;
          font-size: 13px;
          color: gray;
        }

        .searchResult__infoBottom {
          display: flex;
          justify-content: space-between;
        }

        .searchResult__star {
          color: red;
        }

        .searchResult__stars {
          display: flex;
          align-items: center;
        }

        .searchResults__price > p {
          text-align: right;
        }

        .searchResults__price {
          position: absolute;
          bottom: 20px;
          right: 30px;
        }
      `}</style>
    </div>
  )
}

export default SearchResult
