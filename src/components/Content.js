import React from "react";
import FlashCard from "./FlashCard";
import Question from "./Question";
import Answer from "./Answer";
import styled from "styled-components";

export default function Content({
  cards,
  onClickFunction,
  condition,
  clickCard,
}) {
  const obj = [];
  cards.map((c) => {
    obj.push({
      condition: condition[cards.indexOf(c)],
      1: (
        <FlashCard
          number={cards.indexOf(c) + 1}
          onClickFunction={onClickFunction}
          clickCard={clickCard}
        />
      ),
      2: <Question onClickFunction={onClickFunction} question={c.question} />,
      3: <Answer answer={c.answer} />,
    });
  });
  return <Container>{obj.map((x) => x[x.condition])}</Container>;

  //   return (
  //     <Container>
  //       {cards.map((c) =>
  //         condition === 0 ? (
  //           <FlashCard
  //             number={cards.indexOf(c) + 1}
  //             onClickFunction={onClickFunction}
  //           />
  //         ) : condition === 1 ? (
  //           <Question onClickFunction={onClickFunction} question={c.question} />
  //         ) : (
  //           <Answer answer={c.answer} />
  //         )
  //       )}
  //     </Container>
  //   );
}

const Container = styled.main`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
