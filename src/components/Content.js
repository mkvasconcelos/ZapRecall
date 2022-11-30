import React from "react";
import FlashCard from "./FlashCard";
import Question from "./Question";
import Answer from "./Answer";
import styled from "styled-components";

export default function Content({
  cards,
  condition,
  clickCard,
  clickButton,
  answerButton,
}) {
  const obj = [];
  cards.map((c) =>
    obj.push({
      condition: condition[cards.indexOf(c)],
      1: (
        <FlashCard
          number={cards.indexOf(c) + 1}
          clickCard={clickCard}
          answerButton={answerButton[cards.indexOf(c)]}
        />
      ),
      2: (
        <Question
          clickCard={clickCard}
          number={cards.indexOf(c) + 1}
          question={c.question}
        />
      ),
      3: (
        <Answer
          clickCard={clickCard}
          clickButton={clickButton}
          number={cards.indexOf(c) + 1}
          answer={c.answer}
        />
      ),
    })
  );
  return <Container>{obj.map((x) => x[x.condition])}</Container>;
}

const Container = styled.main`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
