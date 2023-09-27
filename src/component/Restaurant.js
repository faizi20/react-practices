import React from "react";
import { CDN_URL } from "../utils/constants";

const Restaurant = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt="food" />
      <div className="title">
        <h3>{name}</h3>
        <span className="dish-menu">{cuisines.join(" , ")}</span>
        <p>{area}</p>
        <span className="d-f">
          <h4>{avgRating}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    </div>
  );
};

export default Restaurant;