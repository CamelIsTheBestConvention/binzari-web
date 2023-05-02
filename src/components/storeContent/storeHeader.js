import styled from "styled-components";
import LeisureFilterImg from "../../images/storeImages/leisureType.png";
import FilterImg from "../../images/storeImages/filter.png";

const StoreHeader = () => {
  return (
    <>
      <StoreHeaderWrapper>
        {/* 첫번째 줄 */}
        <StoreFirstHeader>
          <FirstHeaderLeisure>
            <img src={LeisureFilterImg} />
            {/* 필터목록 */}
            <LeisureFilterDiv></LeisureFilterDiv>
          </FirstHeaderLeisure>
          <FirstHeaderFilter>
            <img src={FilterImg} />
            {/* 필터목록 */}
            <div></div>
          </FirstHeaderFilter>
        </StoreFirstHeader>
        {/* 두번째 줄 */}
        <StoreSecondWrapper></StoreSecondWrapper>
      </StoreHeaderWrapper>
    </>
  );
};
export default StoreHeader;

const StoreHeaderWrapper = styled.article``;

const StoreFirstHeader = styled.article``;

const FirstHeaderLeisure = styled.article``;

const FirstHeaderFilter = styled.article``;

const StoreSecondWrapper = styled.article``;

const LeisureFilterDiv = styled.div``;
