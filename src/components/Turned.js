import React from "react";
import styled from "styled-components";

export default function Turned({
  answer,
  number,
  clickCard,
  answerButton,
  setAnswerButton,
  doneFlashCards,
  setDoneFlashCards,
  answerSequence,
  setAnswerSequence,
  setAllRight,
  cards,
}) {
  function clickButton(card, value, img) {
    const newAnswerButton = [...answerButton];
    newAnswerButton[card - 1] = value;
    const newAnswerSequence = [...answerSequence, img];
    setAnswerButton(newAnswerButton);
    setAnswerSequence(newAnswerSequence);
    setDoneFlashCards(doneFlashCards + 1);
    answerMessage();
  }
  function answerMessage() {
    if (doneFlashCards === cards.length - 1) {
      answerSequence.includes("assets/img/icone_erro.png")
        ? setAllRight(-1)
        : setAllRight(1);
    }
  }
  return (
    <Container>
      <p data-test="flashcard-text">{answer}</p>
      <div>
        <button
          data-test="no-btn"
          onClick={() => {
            clickCard(number);
            clickButton(number, 1, "assets/img/icone_erro.png");
          }}
        >
          Não lembrei
        </button>
        <button
          data-test="partial-btn"
          onClick={() => {
            clickCard(number);
            clickButton(number, 2, "assets/img/icone_quase.png");
          }}
        >
          Quase não lembrei
        </button>
        <button
          data-test="zap-btn"
          onClick={() => {
            clickCard(number);
            clickButton(number, 3, "assets/img/icone_certo.png");
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
