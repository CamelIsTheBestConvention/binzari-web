import styled from "styled-components";
import DirectionPinImg from "../../images/homeImages/directionPin.png";
import DirectionDownArrowImg from "../../images/homeImages/downArrow.png";
import LocationImg from "../../images/homeImages/location.png";

const HomeDirection = () => {
  return (
    <>
      <HomeDirectionWrapper>
        <DirectionBox>
          <DirectionBoxImg src={DirectionPinImg} />
          <DirectionBoxDetail>
            <DirectionBoxDetailUl>
              <DirectionBoxDetailLi>
                서울특별시 강남구 테헤란로 146
              </DirectionBoxDetailLi>
            </DirectionBoxDetailUl>
            <DirectionBoxDetailImg src={DirectionDownArrowImg} />
          </DirectionBoxDetail>
        </DirectionBox>
        <DirectionLocation>
          <img src={LocationImg} />
        </DirectionLocation>
      </HomeDirectionWrapper>
    </>
  );
};
export default HomeDirection;

const HomeDirectionWrapper = styled.section`
  width: 90%;
  max-width: 420px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px auto;
`;

const DirectionBox = styled.article`
  width: 80%;
  margin: 0 10px;
  display: flex;
`;

const DirectionBoxImg = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 5px;
`;

const DirectionBoxDetail = styled.article`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: -2px;
  width: 80%;
`;
const DirectionBoxDetailUl = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const DirectionBoxDetailLi = styled.li`
  font-size: 0.95rem;
  margin-left: 10px;
  margin-top: 1px;
`;
const DirectionBoxDetailImg = styled.img`
  width: 12px;
  height: 12px;
  margin: 4px 5px 0 5px;
`;
const DirectionLocation = styled.article`
  margin-right: 10px;
`;
