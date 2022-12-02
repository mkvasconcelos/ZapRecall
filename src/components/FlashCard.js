import React, { useState } from "react";
import Closed from "./Closed";
import Opened from "./Opened";
import Turned from "./Turned";
import Done from "./Done";
import styled from "styled-components";

export default function FlashCard({
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
  function clickCard(card) {
    const newCondition = [...condition];
    newCondition[card - 1]++;
    setCondition(newCondition);
  }
  const obj = [];
  cards.map((c) =>
    obj.push({
      condition: condition[cards.indexOf(c)],
      0: <Closed number={cards.indexOf(c) + 1} clickCard={clickCard} />,
      1: (
        <Opened
          clickCard={clickCard}
          number={cards.indexOf(c) + 1}
          question={c.question}
        />
      ),
      2: (
        <Turned
          clickCard={clickCard}
          number={cards.indexOf(c) + 1}
          answer={c.answer}
          answerButton={answerButton}
          setAnswerButton={setAnswerButton}
          doneFlashCards={doneFlashCards}
          setDoneFlashCards={setDoneFlashCards}
          answerSequence={answerSequence}
          setAnswerSequence={setAnswerSequence}
          setAllRight={setAllRight}
          cards={cards}
        />
      ),
      3: (
        <Done
          number={cards.indexOf(c) + 1}
          answerButton={answerButton[cards.indexOf(c)]}
        />
      ),
    })
  );
  return (
    <Container>
      {obj.map((x) => (
        <div data-test="flashcard">{x[x.condition]}</div>
      ))}
    </Container>
  );
}

const Container = styled.main`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
