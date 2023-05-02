import styled from "styled-components";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";
import StoreHeader from "../components/storeContent/storeHeader";

const Board = () => {
  return (
    <>
      <Header />
      <BoardMain>
        <BoardWrapper>
          <StoreHeader />
        </BoardWrapper>
      </BoardMain>
      <Footer />
    </>
  );
};
export default Board;

const BoardMain = styled.main`
  width: 80%;
  margin: 0 auto;
`;

const BoardWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
  position: relative;
`;
