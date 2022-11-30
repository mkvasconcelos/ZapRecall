import React, { useState } from "react";
import GlobalStyle from "./glogalStyles";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

function App() {
  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  const [doneFlashCards, setDoneFlashCards] = useState(0);
  const [condition, setCondition] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  const [list, setList] = useState([]);

  function clickCard(card) {
    setList([...list, card]);
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content
        cards={cards}
        condition={condition}
        clickCard={clickCard}
        onClickFunction={() => {
          const newCondition = [...condition];
          console.log(list[list.length - 1]);
          newCondition[list[list.length - 1]] += 1;
          setCondition(newCondition);
        }}
      />
      <Footer totalFlashCards={cards.length} doneFlashCards={doneFlashCards} />
    </>
  );
}

export default App;
