import React from "react";
import styled from "styled-components";

export default function Welcome({ setWelcome }) {
  return (
    <Container>
      <img src="assets/img/logo.png"></img>
      <p>ZapRecall</p>
      <button onClick={() => setWelcome(false)}>Iniciar Recall!</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 400;
  color: #ffffff;
  font-family: "Righteous", Arial, Helvetica, sans-serif;

  p {
    margin: 20px 0;
  }

  button {
    width: 246px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #d70900;
    font-family: "Recursive", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
  }
`;
