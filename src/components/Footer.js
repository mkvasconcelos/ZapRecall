import React from "react";
import styled from "styled-components";

export default function Footer({ doneFlashCards, totalFlashCards }) {
  return (
    <Container>
      <p>
        {doneFlashCards}/{totalFlashCards} CONCLUÍDOS
      </p>
    </Container>
  );
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
`;
