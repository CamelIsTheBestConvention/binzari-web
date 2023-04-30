import styled from "styled-components";
import DetailInfoSeatImgImg from "../../images/storeImages/rectangle.png";

const DetailInfoList = () => {
  return (
    <>
      <DetailInfoBox>
        {/* 좌석 이미지 */}
        <DetailInfoSeatImgWrapper>
          <DetailInfoSeatImg src={DetailInfoSeatImgImg} />
        </DetailInfoSeatImgWrapper>
        {/* 좌석 가격 */}
        <DetailInfoPriceWrapper>
          <SelectSeat>중대</SelectSeat>
          <TimePrice>1500원/10분</TimePrice>
          <InfoSize>가로 1,224mm</InfoSize>
          <InfoSize>세로 2,448mm</InfoSize>
        </DetailInfoPriceWrapper>
        {/* 예약 버튼 */}
        <DetailInfoBtnWrapper>
          <UseCount>1 / 8</UseCount>
          <ReserveBtn>예약하기</ReserveBtn>
        </DetailInfoBtnWrapper>
      </DetailInfoBox>
    </>
  );
};
export default DetailInfoList;

const DetailInfoBox = styled.article`
  width: 100%;
  display: flex;
  padding: 1rem 0;
`;

const DetailInfoSeatImgWrapper = styled.article`
  width: 20%;
`;

const DetailInfoSeatImg = styled.img`
  width: 100%;
`;

const DetailInfoPriceWrapper = styled.article`
  width: 50%;
  margin: auto 0 auto 5%;
`;

const SelectSeat = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;

  @media (min-width: 1000px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const TimePrice = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: 300;

  @media (min-width: 1000px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const InfoSize = styled.p`
  font-size: 0.7rem;
  font-weight: 300;

  @media (min-width: 1000px) {
    font-size: 0.8rem;
  }
`;

const DetailInfoBtnWrapper = styled.article`
  width: 25%;
  text-align: right;
  margin: auto 0;
`;

const UseCount = styled.p`
  font-size: 0.8rem;
  color: #5ec48d;
  margin-bottom: 1rem;

  @media (min-width: 1000px) {
    font-size: 0.9rem;
  }
`;

const ReserveBtn = styled.button`
  background-color: #5ec48d;
  border-radius: 0.3rem;
  color: #fff;
  border: none;
  width: 4.5rem;
  height: 1.7rem;

  @media (min-width: 1000px) {
    width: 5rem;
    height: 2rem;
  }
`;
