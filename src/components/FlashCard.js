import React from "react";
import styled from "styled-components";

export default function FlashCard({
  number,
  onClickFunction,
  clickCard,
  answerButton,
}) {
  return (
    <Container answerButton={answerButton} onClick={onClickFunction}>
      <p>Pergunta {number}</p>
      <button
        onClick={() => clickCard(number)}
        disabled={answerButton === 0 ? false : true}
      ></button>
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

  button {
    width: 23px;
    height: 23px;
    cursor: pointer;
    border: none;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.answerButton === 0
        ? "url('assets/img/seta_play.png')"
        : props.answerButton === 1
        ? "url('assets/img/icone_erro.png')"
        : props.answerButton === 2
        ? "url('assets/img/icone_quase.png')"
        : "url('assets/img/icone_certo.png')"};
  }
`;
