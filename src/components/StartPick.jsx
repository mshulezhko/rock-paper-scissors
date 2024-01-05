import React, { useState } from "react";
import ScoreBox from "./ScoreBox";
import PickedEnd from "./PickedEnd";
import LineGame from "./images/bg-triangle.svg";
import Paper from "./images/icon-paper.svg";
import Rock from "./images/icon-rock.svg";
import Scissors from "./images/icon-scissors.svg";
import Rules from "./Rules";

const StartPick = () => {
  const [pickedElement, setPickedElement] = useState("");
  const [points, setPoints] = useState(0);

  const finishPick = () => {
    const playElement = document.querySelector(".play-scope-wrap");
    playElement.style.display = "none";
  };

  const checkChosenElement = (e) => {
    let currentId;
    if (e.target.id.length <= 0) {
      currentId = e.target.parentElement.id;
    } else {
      currentId = e.target.id;
    }

    setPickedElement(currentId);
    finishPick();
  };

  const resetPoints = () => {
    localStorage.setItem("points", "0");
    setPoints(0);
  };

  const showRules = () => {
    const rulesWrapElement = document.querySelector(".rules-wrap-modal");
    rulesWrapElement.classList.add("active");
  };

  return (
    <div className="game-wrap">
      <ScoreBox points={points} />
      <div className="play-scope-wrap">
        <img className="lineGame" src={LineGame} alt="" />
        <div
          onClick={checkChosenElement}
          id="paper"
          className="paper-icon-pos paper-icon"
        >
          <img src={Paper} alt="" />{" "}
        </div>
        <div
          onClick={checkChosenElement}
          id="rock"
          className="rock-icon-pos rock-icon"
        >
          <img src={Rock} alt="" />
        </div>
        <div
          onClick={checkChosenElement}
          id="scissors"
          className="scissors-pos scissors-icon"
        >
          {" "}
          <img src={Scissors} alt="" />
        </div>
      </div>
      <PickedEnd
        points={points}
        setPoints={setPoints}
        pickedElement={pickedElement}
      />
      <Rules />
      <div className="buttons-block">
        <button className="reset-points-btn" onClick={resetPoints}>
          RESET POINTS
        </button>
        <button onClick={showRules} className="rules-btn">
          RULES
        </button>
      </div>
    </div>
  );
};

export default StartPick;
