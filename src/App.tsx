import "./styles.css";
import React from "react";
import GlobalStyle from "./common/globalStyles";
import styled from "styled-components";

import Main from "./pages/Main";
import About from "./pages/About";
import Header from "./components/Header";

const Container = styled.div`
  min-height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <section>
        <Main />
        <About />
      </section>
    </Container>
  );
}
