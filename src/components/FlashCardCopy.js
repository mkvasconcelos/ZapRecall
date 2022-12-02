import React, { useState } from "react";
import styled from "styled-components";

export default function FlashCardCopy({
  cards,
  doneFlashCards,
  setDoneFlashCards,
  answerSequence,
  setAnswerSequence,
  setAllRight,
}) {
  const arr = new Array(cards.length).fill(0);
  const [answerButton, setAnswerButton] = useState([...arr]);
  const [condition, setCondition] = useState([...arr]);
  const obj = {
    1: (
      <img
        data-test="no-icon"
        src="assets/img/icone_erro.png"
        alt="wrong-icon"
      ></img>
    ),
    2: (
      <img
        data-test="partial-icon"
        src="assets/img/icone_quase.png"
        alt="partial-icon"
      ></img>
    ),
    3: (
      <img
        data-test="no-icon"
        src="assets/img/icone_certo.png"
        alt="right-icon"
      ></img>
    ),
  };
  function clickCard(card) {
    const newCondition = [...condition];
    newCondition[card]++;
    setCondition(newCondition);
  }
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
    <Content>
      {cards.map((c, i) => (
        <Container
          condition={condition[i]}
          answerButton={answerButton[cards.indexOf(c)]}
        >
          {condition[i] === 0 ? (
            <p data-test="flashcard-text">Pergunta {cards.indexOf(c) + 1}</p>
          ) : condition[i] === 1 ? (
            <p data-test="flashcard-text">{c.question}</p>
          ) : condition[i] === 2 ? (
            <p data-test="flashcard-text">{c.answer}</p>
          ) : (
            <p data-test="flashcard-text">Pergunta {cards.indexOf(c) + 1}</p>
          )}
          {condition[i] === 2 ? (
            <div>
              <button
                data-test="no-btn"
                onClick={() => {
                  clickCard(cards.indexOf(c));
                  clickButton(
                    cards.indexOf(c) + 1,
                    1,
                    "assets/img/icone_erro.png"
                  );
                }}
              >
                Não lembrei
              </button>
              <button
                data-test="partial-btn"
                onClick={() => {
                  clickCard(cards.indexOf(c));
                  clickButton(
                    cards.indexOf(c) + 1,
                    2,
                    "assets/img/icone_quase.png"
                  );
                }}
              >
                Quase não lembrei
              </button>
              <button
                data-test="zap-btn"
                onClick={() => {
                  clickCard(cards.indexOf(c));
                  clickButton(
                    cards.indexOf(c) + 1,
                    3,
                    "assets/img/icone_certo.png"
                  );
                }}
              >
                Zap!
              </button>
            </div>
          ) : condition[i] === 3 ? (
            obj[answerButton[cards.indexOf(c)]]
          ) : (
            <img
              data-test="play-btn"
              onClick={() => clickCard(cards.indexOf(c))}
              src={
                condition[i] === 0
                  ? "assets/img/seta_play.png"
                  : "assets/img/seta_virar.png"
              }
            ></img>
          )}
        </Container>
      ))}
    </Content>
  );
}

const Content = styled.main`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: ${(props) =>
    props.condition === 0
      ? "#ffffff"
      : props.condition === 3
      ? "#ffffff"
      : "#ffffd4"};
  height: ${(props) =>
    props.condition === 0 ? "65px" : props.condition === 3 ? "65px" : "130px"};
  width: 300px;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: ${(props) =>
    props.condition === 0 ? "center" : props.condition === 3 ? "center" : ""};
  font-weight: ${(props) =>
    props.condition === 0 ? "700" : props.condition === 3 ? "700" : "400"};
  font-size: 16px;
  color: #333333;
  padding: ${(props) =>
    props.condition === 0
      ? "0 10px"
      : props.condition === 3
      ? "0 10px"
      : "10px"};
  border: none;
  position: relative;
  color: ${(props) =>
    props.answerButton === 0
      ? "#333333"
      : props.answerButton === 1
      ? "#FF3030"
      : props.answerButton === 2
      ? "#FF922E"
      : "#2FBE34"};
  text-decoration-line: ${(props) =>
    props.answerButton === 0 ? "none" : "line-through"};

  img {
    width: ${(props) =>
      props.condition === 0 ? "23px" : props.condition === 3 ? "" : "30px"};
    height: ${(props) =>
      props.condition === 0 ? "23px" : props.condition === 3 ? "" : "20px"};
    cursor: pointer;
    border: none;
    position: ${(props) => props.condition === 1 && "absolute"};
    bottom: ${(props) => props.condition === 1 && "5px"};
    right: ${(props) => props.condition === 1 && "15px"};
    ${(props) => (props.condition === 0 ? "#ffffff" : "#ffffd4")};
  }

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
