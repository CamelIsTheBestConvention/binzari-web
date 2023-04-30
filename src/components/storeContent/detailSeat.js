import styled from "styled-components";
import BilliardSeat from "../../images/storeImages/billiardSeat.jpg";

const DetailSeat = () => {
  return (
    <>
      <DetailSeatWrapper>
        <SeatImg src={BilliardSeat} />
      </DetailSeatWrapper>
    </>
  );
};
export default DetailSeat;

const DetailSeatWrapper = styled.article`
  width: 90%;
`;

const SeatImg = styled.img`
  width: 100%;
  margin: 2rem 1rem;
`;
