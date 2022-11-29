import React from "react";
import FlashCard from "./FlashCard";

export default function Content({ cards }) {
  return cards.map((c) => (
    <main>
      <FlashCard number={cards.indexOf(c) + 1} />
    </main>
  ));
}
