import React from "react";
import styled from "styled-components";

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    text-align: end;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const ErrorMessage = styled.p`
  color: red;
`;

function NumberSelector({
  selectedNumber,
  setSelectedNumber,
  printstat,
  printHandler,
}) {
  const arrayNumbers = [1, 2, 3, 4, 5, 6];

  function New(number) {
    setSelectedNumber(number);
    printHandler("");
  }

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <ErrorMessage>{printstat}</ErrorMessage>
      <div className="flex">
        {arrayNumbers.map((number, i) => {
          return (
            <Box
              isSelected={number == selectedNumber}
              key={i}
              onClick={() => New(number)}
            >
              {number}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;
