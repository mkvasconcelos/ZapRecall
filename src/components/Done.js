import React from "react";
import styled from "styled-components";

export default function Done({ number, answerButton }) {
  const obj = {
    1: <img data-test="no-icon" src="assets/img/icone_erro.png"></img>,
    2: <img data-test="partial-icon" src="assets/img/icone_quase.png"></img>,
    3: <img data-test="no-icon" src="assets/img/icone_certo.png"></img>,
  };
  return (
    <Container answerButton={answerButton}>
      <p data-test="flashcard-text">Pergunta {number}</p>
      {obj[answerButton]}
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
  color: ${(props) =>
    props.answerButton === 0
      ? "#333333"
      : props.answerButton === 1
      ? "#FF3030"
      : props.answerButton === 2
      ? "#FF922E"
      : "#2FBE34"};
  text-decoration-line: ${(props) =>
    props.answerButton === 0 ? "none" : "line-through"};
`;
