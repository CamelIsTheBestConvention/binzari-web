import styled from "styled-components";
import SortImg from "../../images/homeImages/sort.png";

const LeisureTitle = () => {
  return (
    <>
      <LeisureTitleWrapper>
        <LeisureTitleImg src={SortImg} />
        <LeisureTitleSpan>업종</LeisureTitleSpan>
      </LeisureTitleWrapper>
    </>
  );
};
export default LeisureTitle;

const LeisureTitleWrapper = styled.section`
  margin: 0 10px 5px 10px;
  display: flex;
`;

const LeisureTitleImg = styled.img`
  width: 15px;
  height: 15px;
  margin: 2px 5px 0 0;
`;

const LeisureTitleSpan = styled.span`
  font-size: 0.89rem;
`;
