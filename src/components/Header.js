import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      {/* <img>imagem</img> */}
      <p>ZapRecall</p>
    </Container>
  );
}

const Container = styled.header`
  font-family: "Righteous", Arial, Helvetica, sans-serif;
  font-size: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
`;
