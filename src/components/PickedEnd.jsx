import React, { useEffect, useState } from "react";
import PickedResult from "./PickedResult";
import Paper from "./images/icon-paper.svg";
import Rock from "./images/icon-rock.svg";
import Scissors from "./images/icon-scissors.svg";

const PickedEnd = ({ pickedElement, setPoints, points }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [housePickedElement, setHousePickedElement] = useState("");
  const [housePickedImgUrl, setHousePickedImgUrl] = useState("");

  const updatePoints = (outcome) => {
    // Update points based on the game outcome
    const newPoints =
      outcome === "your"
        ? points + 1
        : outcome === "house"
        ? points - 1
        : points;

    // Save the updated points to local storage
    localStorage.setItem("points", newPoints);

    // Update the state to trigger a re-render
    setPoints(newPoints);
  };

  const showResult = (housePickedElement) => {
    setTimeout(() => {
      let winnerId;

      if (pickedElement === housePickedElement) {
        console.log("no winners");
        winnerId = "";
      }

      if (pickedElement === "paper" && housePickedElement === "rock") {
        console.log("you win");
        winnerId = "your";
      }

      if (housePickedElement === "paper" && pickedElement === "rock") {
        console.log("you lose");
        winnerId = "house";
      }

      if (pickedElement === "rock" && housePickedElement === "scissors") {
        console.log("you won");
        winnerId = "your";
      }

      if (housePickedElement === "rock" && pickedElement === "scissors") {
        console.log("you lose");
        winnerId = "house";
      }

      if (pickedElement === "scissors" && housePickedElement === "paper") {
        console.log("you won");
        winnerId = "your";
      }

      if (pickedElement === "paper" && housePickedElement === "scissors") {
        console.log("you lose");
        winnerId = "house";
      }

      setGradientWinner(winnerId);
      showButton(winnerId);
      updatePoints(winnerId);
    }, 1000);
  };

  const showButton = (winnerId) => {
    const pickedResultBtn = document.querySelector(".picked-result-btn-wrap");
    pickedResultBtn.classList.add("active");

    const resultTitleElement = document.querySelector(".result-title");
    if (winnerId === "house") {
      resultTitleElement.innerText = "you lose";
    } else if (winnerId.length === 0) {
      resultTitleElement.innerText = "no winners";
    } else {
      resultTitleElement.innerText = "you win";
    }
  };

  const setGradientWinner = (winner) => {
    if (winner.length > 0) {
      const winnerElement = document.getElementById(`${winner}-picked-wrap`);
      winnerElement.classList.add("winner");
    }
  };

  const housePickedSetImg = (pickedElementHouse) => {
    let imgUrlHouse;

    if (pickedElementHouse === "paper") {
      imgUrlHouse = Paper;
    }
    if (pickedElementHouse === "rock") {
      imgUrlHouse = Rock;
    }
    if (pickedElementHouse === "scissors") {
      imgUrlHouse = Scissors;
    }

    setHousePickedImgUrl(imgUrlHouse);
    showResult(pickedElementHouse);
  };

  const housePicked = () => {
    const elements = ["paper", "rock", "scissors"];
    setTimeout(() => {
      const imgNumber = Math.round(Math.random() * (2 - 0) + 0);
      setHousePickedElement(elements[imgNumber]);

      housePickedSetImg(elements[imgNumber]);

      const housePickedWaitElement =
        document.querySelector(".house-picked-wait");
      housePickedWaitElement?.remove();
    }, 1000);
  };

  useEffect(() => {
    let imgUrl;

    if (pickedElement === "paper") {
      imgUrl = Paper;
    }
    if (pickedElement === "rock") {
      imgUrl = Rock;
    }
    if (pickedElement === "scissors") {
      imgUrl = Scissors;
    }

    setImgUrl(imgUrl);

    if (pickedElement) {
      const pickedBlockElement = document.querySelector(".picked-block-wrap");
      pickedBlockElement.classList.add("active");

      const resetPointsBtn = document.querySelector(".reset-points-btn");
      resetPointsBtn.classList.add("active");

      housePicked();
    }

    const storedPoints = localStorage.getItem("points");
    if (storedPoints) {
      setPoints(parseInt(storedPoints, 10));
    }
    // eslint-disable-next-line
  }, [pickedElement]);

  return (
    <div className="picked-block-wrap">
      <div className="your-picked picked-block">
        <h2 className="picked-title">YOU PICKED</h2>
        <div
          id="your-picked-wrap"
          className={`your-picked-result  ${pickedElement}-icon`}
        >
          <img
            className={`your-picked-result-img ${pickedElement}`}
            src={imgUrl}
            alt=""
          />
        </div>
      </div>
      <PickedResult />
      <div className="house-picked picked-block">
        <h2 className="picked-title">THE HOUSE PICKED</h2>
        <div className="your-picked-result house-picked-wait house-picked-wait active">
          {/* over time delete */}
        </div>
        <div
          id="house-picked-wrap"
          className={`your-picked-result  ${housePickedElement}-icon`}
        >
          <img
            className={`your-picked-result-img ${housePickedElement}`}
            src={housePickedImgUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PickedEnd;
