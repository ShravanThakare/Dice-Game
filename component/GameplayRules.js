import React from "react";
import styled from "styled-components";

const RulesContainer = styled.div`
  margin-top: 20px;
  height: 250px;
  margin-left: 100px;
  padding: 10px 30px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function GameplayRules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>

      <div>
        <p> Select any number</p>
        <p>Click on dice image</p>
        <p>
          after clicking on the dice image if selected number is equal to the
          dice number you will get some points equal to number comes on dice
        </p>
        <p>If you get wrong guess then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
}

export default GameplayRules;
