import React from "react";
import NamaGame from "./images/logo.svg";

const ScoreBox = ({ points }) => {
  return (
    <div className="score-box">
      <div className="name-game">
        {" "}
        <img src={NamaGame} alt="" />
      </div>
      <div className="score-wrap">
        <p className="score-title">SCORE</p>
        <h1 className="score-count">{points}</h1>
      </div>
    </div>
  );
};

export default ScoreBox;
