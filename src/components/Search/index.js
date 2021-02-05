import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

import React, { useState } from "react"
import { useRouter } from "next/router"

import { DateRangePicker } from "react-date-range"
import { withStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/People"

const SearchButton = withStyles({
  root: {
    position: "absolute",
    left: 0,
    top: 480,
    backgroundColor: "#ff7779",
    color: "white",
    width: 559,
    "&:hover": {
      backgroundColor: "white",
      color: "#ff7779",
    },
  },
})(Button)
//DATA picker component
const Search = () => {
  const router = useRouter()

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }
  const handleSelect = ranges => {
    console.log(ranges)
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <SearchButton onClick={() => router.push("/search")}>
        Search Airbnb
      </SearchButton>
      <style jsx>{`
        .search {
          position: absolute;
          top: 35px;
          left: 25%;
          width: 100vw;
        }
        .search > h2 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 559px;
          padding: 10px;
          background-color: white;
          position: absolute;
          left: 0;
          top: 380px;
        }
        .search > input {
          width: 559px;
          padding: 20px;
          position: absolute;
          left: 0;
          height: 30px;
          top: 420px;
          border: none;
        }

        .search > input:focus {
          outline-width: 0;
        }
      `}</style>
    </div>
  )
}

export default Search
