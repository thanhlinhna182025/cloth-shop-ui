import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: #008080;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 400;
  font-size: 14px;
`;

const Anouncement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Anouncement;
