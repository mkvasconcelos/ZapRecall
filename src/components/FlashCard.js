import React from "react";
import styled from "styled-components";

export default function FlashCard({ number, onClickFunction, clickCard }) {
  return (
    <Container onClick={onClickFunction}>
      <p>Pergunta {number}</p>
      <img
        onClick={() => clickCard(number)}
        src="assets/img/seta_play.png"
      ></img>
    </Container>
  );
}

const Container = styled.button`
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
  padding: 0 15px;
  border: none;

  img {
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`;
