import React from "react";
import Totalscore from "./Totalscore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import DiceRole from "../Components/DiceRole";
import Rules from "./Rules";
import { useState } from "react";
import GameplayRules from "./GameplayRules";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .top_section {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentvalue, valueChange] = useState(1);
  const [score, scoreHandler] = useState(0);
  const [printstat, printHandler] = useState("");
  const [visible, Handler] = useState(false);

  function VisibleStateHandler() {
    Handler((prev) => !prev);
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //   console.log(randomIntFromInterval(1, 7));

  const imageHandler = () => {
    if (!selectedNumber) {
      printHandler("Please Select atleast one number");
      return;
    } else {
      printHandler("");
    }
    const ans = randomIntFromInterval(1, 6);
    valueChange(ans);

    if (selectedNumber == currentvalue) {
      scoreHandler((prev) => prev + ans);
    } else {
      scoreHandler((prev) => prev - 2);
    }

    setSelectedNumber(!selectedNumber);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <Totalscore score={score}></Totalscore>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          printstat={printstat}
          printHandler={printHandler}
        ></NumberSelector>
      </div>
      <DiceRole currentvalue={currentvalue} roleDice={imageHandler}></DiceRole>

      <div className="btn-container">
        {" "}
        <button className="Btn" onClick={() => scoreHandler(0)}>
          Reset Score
        </button>
        <Rules
          VisibleStateHandler={VisibleStateHandler}
          className="Btn2"
        ></Rules>
        {visible ? <GameplayRules></GameplayRules> : ""}
      </div>
    </MainContainer>
  );
}

export default GamePlay;
