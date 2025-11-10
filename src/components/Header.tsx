import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .header p {
    color: #ffffff;
    margin-left: 20px;
    margin-top: 15px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
  }
  .header {
    position: fixed;
    top: 0;
    width: 100vw;
    // background-color: #333;
    z-index: 1;
  }
`;

export default function Header() {
  return (
    <Container>
      <div className="header">
        <p>nurmi.dev</p>
      </div>
    </Container>
  );
}
