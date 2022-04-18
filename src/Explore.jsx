import React from "react";

const Explore = (props) => {
  return (
    <div className="exploreMain">
      <div>
        <strong className="exploreTxt">Explore</strong>
        <em className="subexplore">
          From one guest-rooms to <br />
          penthouses with pools and gardens
        </em>
      </div>
      <div className="room1"></div>
      <div className="room2"></div>
      <div className="roominfo1">
        <em className="roomtext1">Room with one king size bed</em>
        <em className="r1price">35$</em>
        <em className="r1size">28m²</em>
        <button className="r1book">Book!</button>
      </div>
      <div className="roominfo2">
        <em className="roomtext2">Penthouse for 8 person</em>
        <em className="r2price">2039$</em>
        <em className="r2size">438m²</em>
        <button className="r2book">Book!</button>
      </div>
    </div>
  );
};

export default Explore;
