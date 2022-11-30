import React from "react";
import styled from "styled-components";

export default function Question({
  answer,
  number,
  clickCard,
  answerButton,
  setAnswerButton,
  doneFlashCards,
  setDoneFlashCards,
}) {
  function clickButton(card, value) {
    const newAnswerButton = [...answerButton];
    newAnswerButton[card - 1] = value;
    setAnswerButton(newAnswerButton);
    setDoneFlashCards(doneFlashCards + 1);
  }
  return (
    <Container>
      <p>{answer}</p>
      <div>
        <button
          onClick={() => {
            clickCard(number);
            clickButton(number, 1);
          }}
        >
          Não lembrei
        </button>
        <button
          onClick={() => {
            clickCard(number);
            clickButton(number, 2);
          }}
        >
          Quase não lembrei
        </button>
        <button
          onClick={() => {
            clickCard(number);
            clickButton(number, 3);
          }}
        >
          Zap!
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffd4;
  height: 130px;
  width: 300px;
  margin: 25px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  position: relative;
  padding: 10px;
  border: none;
  display: flex;
  text-align: start;

  div {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    width: 90%;
  }

  button {
    width: 85px;
    height: 35px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  button:nth-child(1) {
    background-color: #ff3030;
  }

  button:nth-child(2) {
    background-color: #ff922e;
  }

  button:nth-child(3) {
    background-color: #2fbe34;
  }
`;
