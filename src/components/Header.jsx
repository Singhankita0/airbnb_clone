import React from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { AirbnbIcon } from "../Icons";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* <img src="" alt="logo" className="logo" /> */}
        <div className="logo">
          <AirbnbIcon />
        </div>

        {/* <div className="search_box">
          <div className="search_box_text">Any Where</div>
          <div className="search_box_text">Any Week</div>
          <div className="search_box_text3">Add Guests</div>
          <div className="search_icon_div">
            <SearchRoundedIcon className="search_icon" />
          </div>
        </div> */}
        <SearchBox />

        <div className="header_right">
          <div className="airbnb_your_home">Airbnb your home</div>
          <div className="airbnb_your_home">
            <LanguageIcon />
          </div>
          <MenuIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </>
  );
};

export default Header;


const SearchBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const destination = e.target.destination.value;
    const checkInDate = e.target.checkInDate.value;
    const checkOutDate = e.target.checkOutDate.value;
    const guests = e.target.guests.value;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b4e8945403mshffa2158081cc7bep1ff019jsn262103c0b9ac",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    fetch(
      `https://airbnb13.p.rapidapi.com/search-location?location=${destination}&checkin=${checkInDate}&checkout=${checkOutDate}&adults=${guests}&children=0&infants=0&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <form
        className="relative rounded-full bg-white flex pl-8 pr-4 py-4 text-black font-semibold"
        onSubmit={handleSubmit}
      >
        <DestinationInput name="destination" />
        <DateInput label="Check in" name="checkInDate" />
        <DateInput label="Check out" name="checkOutDate" />
        <GuestInput name="guests" />
        <button
          className="px-5 py-2 bg-red-600 text-white font-semibold rounded-full"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

const DestinationInput = ({ name }) => {
  const [destination, setDestination] = useState("");

  return (
    <div className="flex flex-col items-start w-52">
      <div className="text-sm">Where</div>
      <input
        className="border-transparent outline-none bg-transparent font-medium"
        placeholder="Search destinations"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        name={name}
        required
      />
    </div>
  );
};

const DateInput = ({ label, name }) => {
  const [date, setDate] = useState(null);

  return (
    <div className="flex flex-col items-start border-l pl-6 w-36">
      <div className="text-sm">{label}</div>
      <DatePicker
        selected={date ? new Date(date) : null}
        dateFormat="yyyy-MM-dd"
        onChange={(date) => setDate(date)}
        className="border-transparent outline-none bg-transparent font-medium"
        placeholderText="Add dates"
        name={name}
        required
      />
    </div>
  );
};

const GuestInput = ({ name }) => {
  const [guests, setGuests] = useState("");

  return (
    <div className="flex flex-col items-start border-l pl-6 w-36">
      <div className="text-sm">Guests</div>
      <input
        className="border-transparent outline-none bg-transparent font-medium"
        placeholder="No. of guests"
        type="number"
        value={guests ? Number(guests) : ""}
        onChange={(e) => setGuests(e.target.value)}
        name={name}
        required
      />
    </div>
  );
};
