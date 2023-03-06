import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";
import styled from "styled-components";
import Login from "../pages/login";
import MyPage from "../pages/myPage";
import Home from "../pages/home";
import Join from "../pages/join";

function Routing() {
  return (
    <TotalWrapper>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<MyPage />} />
          <Route path="/join" element={<Join />} />
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
