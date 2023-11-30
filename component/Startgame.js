import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  /* flex-wrap: wrap; */

  .Content h1 {
    font-size: 96px;
    white-space: nowrap;
    font: bolder;
  }
`;

const PlayButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  padding: 10px 18px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #383838;
  }
`;

function Startgame({ toggle }) {
  return (
    <Container>
      <img src="/images/dices.png" alt="" />
      <div className="Content">
        <h1>Dice Game</h1>
        <PlayButton onClick={toggle}>Play Now</PlayButton>
      </div>
    </Container>
  );
}

export default Startgame;
