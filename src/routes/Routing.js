import Join from "../pages/join";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";
import styled from "styled-components";
import Login from "../pages/login";

function Routing() {
  return (
    <TotalWrapper>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </TotalWrapper>
  );
}
export default Routing;

const TotalWrapper = styled.div`
  background-color: white;
  max-width: 800px;
  // height: 100%;
  // min-height: 900px;
  margin: 0 auto;
  font-weight: 700;
`;
