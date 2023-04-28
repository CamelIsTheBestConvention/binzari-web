import styled from "styled-components";
import DetailInfoSeatImgImg from "../../images/storeImages/rectangle.png";

const DetailInfo = () => {
  return (
    <>
      <DetailInfoWrapper>
        {/* 좌석 이미지 */}
        <DetailInfoSeatImgWrapper>
          <DetailInfoSeatImg src={DetailInfoSeatImgImg} />
        </DetailInfoSeatImgWrapper>
        {/* 좌석 가격 */}
        <DetailInfoPriceWrapper>
          <p>중대</p>
          <p>1500원/10분</p>
          <p></p>
          <p></p>
        </DetailInfoPriceWrapper>
        {/* 예약 버튼 */}
        <DetailInfoBtnWrapper></DetailInfoBtnWrapper>
      </DetailInfoWrapper>
    </>
  );
};
export default DetailInfo;

const DetailInfoWrapper = styled.article`
    width: 100%;
    padding; 0.5rem 0;
    display: flex;
`;

const DetailInfoSeatImgWrapper = styled.article``;

const DetailInfoSeatImg = styled.img``;

const DetailInfoPriceWrapper = styled.article``;

const DetailInfoBtnWrapper = styled.article``;
