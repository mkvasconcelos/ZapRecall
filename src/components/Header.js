import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <img src="assets/img/logo.png"></img>
      <p>ZapRecall</p>
    </Container>
  );
}

const Container = styled.header`
  font-family: "Righteous", Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
  color: #ffffff;

  img {
    height: 52px;
    width: 60px;
    margin-right: 20px;
  }
`;
