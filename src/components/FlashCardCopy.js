import React, { useState } from "react";
import styled from "styled-components";

export default function FlashCardCopy({
  cards,
  doneFlashCards,
  setDoneFlashCards,
  answerSequence,
  setAnswerSequence,
}) {
  const arr = new Array(cards.length).fill(0);
  const [answerButton, setAnswerButton] = useState([...arr]);
  const [condition, setCondition] = useState([...arr]);
  console.log(condition);
  function clickCard(card) {
    const newCondition = [...condition];
    newCondition[card] === 2 ? (newCondition[card] = 0) : newCondition[card]++;
    setCondition(newCondition);
  }
  function clickButton(card, value, img) {
    const newAnswerButton = [...answerButton];
    newAnswerButton[card - 1] = value;
    const newAnswerSequence = [...answerSequence, img];
    setAnswerButton(newAnswerButton);
    setAnswerSequence(newAnswerSequence);
    setDoneFlashCards(doneFlashCards + 1);
  }
  // const obj = [];
  // cards.map((c) =>
  //   obj.push({
  //     condition: condition[cards.indexOf(c)],
  //     0: <Closed number={cards.indexOf(c) + 1} clickCard={clickCard} />,
  //     1: (
  //       <Opened
  //         clickCard={clickCard}
  //         number={cards.indexOf(c) + 1}
  //         question={c.question}
  //       />
  //     ),
  //     2: (
  //       <Turned
  //         clickCard={clickCard}
  //         number={cards.indexOf(c) + 1}
  //         answer={c.answer}
  //         answerButton={answerButton}
  //         setAnswerButton={setAnswerButton}
  //         doneFlashCards={doneFlashCards}
  //         setDoneFlashCards={setDoneFlashCards}
  //         answerSequence={answerSequence}
  //         setAnswerSequence={setAnswerSequence}
  //       />
  //     ),
  //     3: (
  //       <Done
  //         number={cards.indexOf(c) + 1}
  //         answerButton={answerButton[cards.indexOf(c)]}
  //       />
  //     ),
  //   })
  // );
  return (
    <Content>
      {cards.map((c, i) => (
        <Container condition={condition[i]}>
          {condition[i] === 0 ? (
            <p data-test="flashcard-text">Pergunta {cards.indexOf(c) + 1}</p>
          ) : condition[i] === 1 ? (
            <p data-test="flashcard-text">{c.question}</p>
          ) : (
            <p data-test="flashcard-text">{c.answer}</p>
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
    props.condition === 0 ? "#ffffff" : "#ffffd4"};
  height: ${(props) => (props.condition === 0 ? "65px" : "130px")};
  width: 300px;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => props.condition === 0 && "center"};
  font-weight: ${(props) => (props.condition === 0 ? "700" : "400")};
  font-size: 16px;
  color: #333333;
  padding: ${(props) => (props.condition === 0 ? "0 10px" : "10px")};
  border: none;
  position: relative;

  img {
    width: ${(props) => (props.condition === 0 ? "23px" : "30px")};
    height: ${(props) => (props.condition === 0 ? "23px" : "20px")};
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
