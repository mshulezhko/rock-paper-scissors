import React from "react";
import RulesImg from "./images/image-rules.svg";
import Cross from "./images/icon-close.svg";

const Rules = () => {
  const closeRules = () => {
    const rulesWrap = document.querySelector(".rules-wrap-modal");
    rulesWrap.classList.remove("active");
  };

  return (
    <div className="rules-wrap-modal">
      <div className="rules-wrap modal">
        <div className="rules-header">
          <h2>Rules</h2>
          <img onClick={closeRules} src={Cross} alt="" />
        </div>
        <img className="rules-img" src={RulesImg} alt="rules" />
      </div>
    </div>
  );
};

export default Rules;
