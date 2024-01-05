import React from "react";

const PickedResult = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="picked-result-btn-wrap">
      <h1 className="result-title"> </h1>
      <button onClick={refreshPage}>PLAY AGAIN</button>
    </div>
  );
};

export default PickedResult;
