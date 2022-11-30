import React from "react";
import styled from "styled-components";

export default function Question({ question, number, clickCard }) {
  return (
    <Container>
      <p>{question}</p>
      <img
        onClick={() => clickCard(number)}
        src="assets/img/seta_virar.png"
      ></img>
    </Container>
  );
}

const Container = styled.button`
  background-color: #ffffd4;
  height: 130px;
  width: 300px;
  margin: 25px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  position: relative;
  padding: 10px;
  border: none;
  display: flex;

  img {
    position: absolute;
    bottom: 5px;
    right: 15px;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }
`;
