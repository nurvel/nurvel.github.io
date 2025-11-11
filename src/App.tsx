import { ThemeProvider } from "styled-components";
import theme from "./common/theme";
import Layout from "./components/Layout";

import Main from "./pages/Main";
import About from "./pages/About";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main />
        <About />
      </Layout>
    </ThemeProvider>
  );
}
