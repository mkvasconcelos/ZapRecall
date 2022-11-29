import React from "react";
import FlashCard from "./FlashCard";
import Question from "./Question";
import Answer from "./Answer";

export default function Content({ cards, onClickFunction, condition }) {
  return (
    <main>
      {cards.map((c) =>
        condition === 0 ? (
          <FlashCard
            number={cards.indexOf(c) + 1}
            onClickFunction={onClickFunction}
          />
        ) : condition === 1 ? (
          <Question onClickFunction={onClickFunction} question={c.question} />
        ) : (
          <Answer answer={c.answer} />
        )
      )}
    </main>
  );

  //   return cards.map((c) => (
  //     <main>
  //       <FlashCard
  //         number={cards.indexOf(c) + 1}
  //         onClickFunction={onClickFunction}
  //       />
  //       <Question question={c.question} />
  //       <Answer answer={c.answer} />
  //     </main>
  //   ));
}
