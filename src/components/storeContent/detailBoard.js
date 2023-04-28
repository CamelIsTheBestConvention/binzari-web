import styled from "styled-components";
import BilliardImg from "../../images/storeImages/billiardStore.png";

const DetailBoard = () => {
  return (
    <>
      <DetailImgWrapper>
        <DetailImg src={BilliardImg} />
      </DetailImgWrapper>
    </>
  );
};
export default DetailBoard;

const DetailImgWrapper = styled.article`
  width: 100%;
`;

const DetailImg = styled.img`
  width: 100%;
`;
