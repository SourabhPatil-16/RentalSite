import React from "react";

import "./styles.css";

const Home = (props) => {
  return (
    <div>
      <div className="home">
        <strong>
          Rethink your <br />
          living & renting
        </strong>
      </div>
      <em className="subquote">Make your stay painless with us</em>
      <div className="search sbox">
        <div className="city">
          <em className="cityText">City</em>
          <div className="dropdown citySelect">
            <button className="dropbtn">Select Your City </button>
            <div className="dropdown-content">
              <a href="#">Mumbai</a>
            </div>
          </div>
        </div>
        <div className="date">
          <em className="dateText">Date</em>
          <em className="selectDate">Select Your Dates</em>
          <input type="date" className="calendar" />
        </div>
        <div className="guest">
          <em className="guestsText">Guests</em>
          <em className="addGuests">Add guests</em>
        </div>
        <div className="searchbox">
          <input
            className="searchText"
            type="text"
            placeholder=" 🔍 Search"
            name="search"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
