import React from "react";
import styled from "styled-components";

export default function Question({ answer }) {
  return (
    <Container>
      <p>{answer}</p>
      <div>
        <button className="red">Não lembrei</button>
        <button className="orange">Quase não lembrei</button>
        <button className="green">Zap!</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffd4;
  height: 130px;
  width: 300px;
  margin: 25px auto;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  position: relative;
  padding: 15px;

  div {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    width: 90%;
  }

  button {
    width: 85px;
    height: 35px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
