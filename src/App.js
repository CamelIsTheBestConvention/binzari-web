import styled from "styled-components";
import "./App.css";
import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/header";
import Join from "./components/joinContent/join";

function App() {
  return (
    <>
      <TotalWrapper>
        <Header />
        <Join />
        <Footer />
      </TotalWrapper>
    </>
  );
}

export default App;

const TotalWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
