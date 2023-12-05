import React from "react";

import cardImage from "@icons/cardImage.png";
import likeIcon from "@icons/love.svg";
import { Typography } from "@mui/material";

export const CardImage: React.FC = () => (
  <div className="card-img-box">
    <img
      style={{ borderRadius: "1.6rem" }}
      width="100%"
      src={cardImage}
      className="card-img"
      alt="Card"
    />
    <div
      style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
      className="card-like"
    >
      <div
        style={{ display: "flex", alignItems: "center", columnGap: "0.8rem" }}
        className="like"
      >
        <img src={likeIcon} alt="Like Icon" />
        <Typography variant="body2">36</Typography>
      </div>
    </div>
  </div>
);
