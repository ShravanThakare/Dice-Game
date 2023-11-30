import React from "react";
import styled from "styled-components";

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function DiceRole({ currentvalue, roleDice }) {
  return (
    <DiceContainer>
      <img src={`/images/dice_${currentvalue}.png`} alt="" onClick={roleDice} />
      <p>Click on dice to Roll</p>
    </DiceContainer>
  );
}

export default DiceRole;
