import React, { useState } from "react"
import Search from "../Search"

import { withStyles } from "@material-ui/core/styles"

import { Button } from "@material-ui/core"

const StyledButton = withStyles({
  root: {
    background: "#ff7779",
    color: "white",
    margin: "20px 0",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "white",
      color: "#ff7779",
    },
  },
})(Button)

const SearchStyles = withStyles({
  root: {
    background: "white",
    margin: "0px 0",
    fontWeight: "900",
    color: "#ff7779",
    "&:hover": {
      backgroundColor: "white",
      color: "#ff7779",
    },
  },
})(Button)

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <SearchStyles
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
        >
          {!showSearch ? "Search Dates" : "Hide"}
        </SearchStyles>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to oncover the hidden gens near you
        </h5>
        <StyledButton variant="outlined">Explore Nearby</StyledButton>
      </div>
      <style jsx>{`
        .banner {
          background: url("https://images.pexels.com/photos/165677/pexels-photo-165677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          height: 70vh;
          position: relative;
        }
        .banner_info {
          background-color: black;
          color: white;
          padding-top: 25vh;
          padding-left: 50px;
          padding-right: 50px;
          padding-bottom: 40px;
          width: 300px;
        }

        .banner_info > .h5 {
          margin-top: 10px;
        }

        .banner_search {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}

export default Banner
