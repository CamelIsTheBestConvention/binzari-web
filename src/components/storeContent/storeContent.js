import styled from "styled-components";
import blankImg from "../../images/storeImages/rectangle.png";

const StoreContent = () => {
  return (
    <>
      <a
        href="/store/detail"
        style={{ textDecoration: "none", color: "black" }}
      >
        <StoreBox>
          <StoreBoxImgWrapper>
            <StoreBoxImg src={blankImg} />
          </StoreBoxImgWrapper>
          <StoreBoxContent>
            <h3>역삼당구장</h3>
            <StoreBoxContentLine>
              <p>
                남은자리&nbsp;&nbsp;
                <span style={{ color: "#5EC48D" }}>7 / 10</span>
              </p>
              <p>요금&nbsp;&nbsp;1500 / 10분</p>
            </StoreBoxContentLine>
            <StoreBoxContentLine>
              <p>현재 위치부터</p>
              <p>100m, 6분</p>
            </StoreBoxContentLine>
            <p>디지털 점수 표시, 짜장면 배달 불가</p>
          </StoreBoxContent>
        </StoreBox>
      </a>
    </>
  );
};
export default StoreContent;

const StoreBox = styled.article`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #d9d9d9;
`;

const StoreBoxImgWrapper = styled.article`
  width: 20%;
`;

const StoreBoxImg = styled.img`
  width: 100%;
`;

const StoreBoxContent = styled.article`
  width: 75%;
  margin: auto 0 auto 1rem;

  > h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.7rem;
  }
`;

const StoreBoxContentLine = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
`;
