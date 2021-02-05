import React from "react"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt=""
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          background-color: white;
          z-index: 1;
          width: 100%;
        }
        img {
          object-fit: contain;
          height: 3rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
          margin-left: 2rem;
        }
        .header_center {
          display: flex;
          flex: 1;
          align-items: center;
          max-width: fit-content;
          padding: 10px;
          height: 40px;
          border: 1px solid lightgray;
          border-radius: 999px;
        }

        .header_center > input {
          border: none;
          padding: 10px;
          outline-width: 0;
          /*width: 250px;*/
        }
        .header_right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 15vw;
          margin-right: 80px;
        }
      `}</style>
    </div>
  )
}

export default Header
