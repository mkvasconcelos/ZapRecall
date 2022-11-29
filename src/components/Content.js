import React from "react";
import FlashCard from "./FlashCard";
import Question from "./Question";
import Answer from "./Answer";

export default function Content({ cards, onClickFunction, condition }) {
  return cards.map((c) => (
    <main>
      <FlashCard
        key={cards.indexOf(c)}
        number={cards.indexOf(c) + 1}
        onClickFunction={onClickFunction}
      />
      <Question question={c.question} />
      <Answer answer={c.answer} />
    </main>
  ));
}
