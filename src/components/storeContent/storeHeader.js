import styled from "styled-components";
import HomeSearch from "../homeContent/homeSearch";
import StoreSecondHeader from "./storeSecondHeader";
import StoreThirdHeader from "./storeThirdHeader";

const StoreHeader = () => {
  return (
    <>
      <StoreHeaderWrapper>
        {/* 검색 창 */}
        <HomeSearch />
        {/* 두번째 줄 */}
        <StoreSecondHeader />
        {/* 세번째 줄 */}
        <StoreThirdHeader />
      </StoreHeaderWrapper>
      <StoreHeaderDummy></StoreHeaderDummy>
    </>
  );
};
export default StoreHeader;

const StoreHeaderWrapper = styled.article`
  width: 100%;
  position: fixed;
  top: 5%;
  left: 0;
  background-color: #fff;
`;

const StoreHeaderDummy = styled.div`
  height: 8rem;
`;
