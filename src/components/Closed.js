import React from "react";
import styled from "styled-components";

export default function Closed({ number, clickCard }) {
  return (
    <Container>
      <p data-test="flashcard-text">Pergunta {number}</p>
      <button data-test="play-btn" onClick={() => clickCard(number)}></button>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  height: 65px;
  width: 300px;
  margin: 25px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  padding: 0 10px;
  border: none;

  button {
    width: 23px;
    height: 23px;
    cursor: pointer;
    border: none;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-image: url("assets/img/seta_play.png");
  }
`;
