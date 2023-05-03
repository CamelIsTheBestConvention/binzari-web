import styled from "styled-components";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";
import StoreHeader from "../components/storeContent/storeHeader";
import StoreMain from "../components/storeContent/storeMain";

const Board = () => {
  return (
    <>
      <Header />
      <BoardMain>
        <BoardWrapper>
          <StoreHeader />
          <StoreMain />
        </BoardWrapper>
      </BoardMain>
      <Footer />
    </>
  );
};
export default Board;

const BoardMain = styled.main`
  width: 90%;
  margin: 0 auto;
`;

const BoardWrapper = styled.section`
  width: 100%;
  position: relative;
`;
