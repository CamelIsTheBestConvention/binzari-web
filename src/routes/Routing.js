import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "../pages/login";
import MyPage from "../pages/myPage";
import Home from "../pages/home";
import Join from "../pages/join";
import Detail from "../pages/detail";
import Board from "../pages/board";

function Routing() {
  return (
    <TotalWrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<MyPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/store/detail" element={<Detail />} />
          <Route path="/store" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </TotalWrapper>
  );
}
export default Routing;

const TotalWrapper = styled.div`
  background-color: white;
  max-width: 500px;
  // height: 100%;
  // min-height: 900px;
  margin: 0 auto;
  font-weight: 700;
`;
