import React from "react";
import styled from "styled-components";

export default function Footer({
  doneFlashCards,
  answerSequence,
  cards,
  allRight,
}) {
  return (
    <Container data-test="footer">
      {allRight !== 0 && (
        <section>
          <div>
            <img
              src={
                allRight === 1 ? "assets/img/party.png" : "assets/img/sad.png"
              }
            ></img>
            <p>{allRight === 1 ? "Parábens!" : "Putz..."}</p>
          </div>
          <p>
            {allRight === 1
              ? "Você não esqueceu de nenhum flashcard!"
              : "Ainda faltam alguns... Mas não desanime!"}
          </p>
        </section>
      )}

      <p>
        {doneFlashCards}/{cards.length} CONCLUÍDOS
      </p>
      <div>
        {answerSequence.map((i) => (
          <img src={i}></img>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
  min-height: 70px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: #333333;

  img {
    margin: 2.5px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    text-align: center;
    margin: 15px 0;
  }

  section div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
