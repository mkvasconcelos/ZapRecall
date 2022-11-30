import React from "react";
import styled from "styled-components";

export default function FlashCard({ number, onClickFunction, clickCard }) {
  return (
    <Container answerButton={1} onClick={onClickFunction}>
      <p>Pergunta {number}</p>
      <img onClick={() => clickCard(number)}></img>
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
  ///////
  color: ${(props) => (props.answerButton === 0 ? "#333333" : "#FF3030")};
  text-decoration-line: ${(props) =>
    props.answerButton === 0 ? "none" : "line-through"};

  img {
    width: 20px;
    height: 23px;
    cursor: pointer;
    background-image: ${(props) =>
      props.answerButton === 0
        ? 'url("assets/img/seta_play.png")'
        : 'url("assets/img/icone_erro.png")'};
  }
`;
