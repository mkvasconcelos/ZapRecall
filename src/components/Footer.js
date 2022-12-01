import React from "react";
import styled from "styled-components";

export default function Footer({ doneFlashCards, answerSequence, cards }) {
  return (
    <Container data-test="footer">
      <div>
        <img src="assets/img/party.png"></img>
        <p>Parábens</p>
      </div>
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
  height: 70px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;

  img {
    margin: 2.5px;
  }
`;
