import React from "react";
import styled from "styled-components";

export default function FlashCard({ number }) {
  return (
    <Container>
      <p>Pergunta {number}</p>
      <img src="assets/img/seta_play.png"></img>
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
  padding: 0 15px;

  img {
    width: 20px;
    height: 23px;
  }
`;
