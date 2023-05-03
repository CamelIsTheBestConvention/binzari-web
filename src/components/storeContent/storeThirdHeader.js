import styled from "styled-components";
import OtherFilterIcon from "../../images/storeImages/otherFilter.png";
import DownArrow from "../../images/storeImages/downArrow.png";

const StoreThirdHeader = () => {
  return (
    <>
      <StoreThirdWrapper>
        {/* 종목 필터 */}
        <ThirdHeaderFilter>
          <OtherFilterImg src={OtherFilterIcon} />
          {/* 필터목록 */}
          <OtherFilterDiv>
            <OtherFilterUl>
              <OtherFilterLi>흡연 여부</OtherFilterLi>
            </OtherFilterUl>
            <DownImg src={DownArrow} />
          </OtherFilterDiv>

          <OtherFilterDiv>
            <OtherFilterUl>
              <OtherFilterLi>취식 여부</OtherFilterLi>
            </OtherFilterUl>
            <DownImg src={DownArrow} />
          </OtherFilterDiv>
        </ThirdHeaderFilter>
      </StoreThirdWrapper>
    </>
  );
};
export default StoreThirdHeader;

const StoreThirdWrapper = styled.article`
  width: 85%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px auto;
`;

const ThirdHeaderFilter = styled.article`
  display: flex;
`;

const OtherFilterImg = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin: auto;
`;

const OtherFilterDiv = styled.article`
  border: 1px solid black;
  border-radius: 0.7rem;
  padding: 0.3rem 0.5rem;
  display: flex;
  margin-left: 0.3rem;
`;

const OtherFilterUl = styled.ul`
  margin-right: 0.5rem;
  font-size: 0.9rem;
`;

const OtherFilterLi = styled.li``;

const DownImg = styled.img`
  width: 0.8rem;
  height: 0.7rem;
  margin-top: 0.1rem;
`;
