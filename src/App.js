import styled, { ThemeProvider } from "styled-components";
import Routing from "./routes/Routing";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import "./styles/font.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
