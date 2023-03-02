import styled from "styled-components";
import JejuBilliard from "../../images/homeImages/jejuBilliard.jpg";

const FavoriteContentBox = () => {
  return (
    <>
      <FavoriteContentBoxWrapper>
        <FavoriteContentBoxUl>
          {/* 즐겨찾기 가게 */}
          <FavoriteContentBoxLi>
            <div>
              <FavoriteContentBoxDivImg src={JejuBilliard} alt="제주당구장" />
            </div>
            <FavoriteContentBoxDivTitle>
              <span>제주당구장</span>
              <StarSpan>☆</StarSpan>
            </FavoriteContentBoxDivTitle>
            <FavoriteContentBoxDivText>
              <span>남은 자리</span>
              <span>1/6</span>
            </FavoriteContentBoxDivText>
            <FavoriteContentBoxDivText>
              <span>요금</span>
              <span>1000원/10분</span>
            </FavoriteContentBoxDivText>
            <FavoriteContentBoxDivText>
              <span>현재위치부터</span>
              <span>3분</span>
            </FavoriteContentBoxDivText>
          </FavoriteContentBoxLi>
          {/* 즐겨찾기 가게 */}
          <FavoriteContentBoxLi>
            <div>
              <FavoriteContentBoxDivImg src={JejuBilliard} alt="제주당구장" />
            </div>
            <FavoriteContentBoxDivTitle>
              <span>제주당구장</span>
              <StarSpan>☆</StarSpan>
            </FavoriteContentBoxDivTitle>
            <FavoriteContentBoxDivText>
              <span>남은 자리</span>
              <span>1/6</span>
            </FavoriteContentBoxDivText>
            <FavoriteContentBoxDivText>
              <span>요금</span>
              <span>1000원/10분</span>
            </FavoriteContentBoxDivText>
            <FavoriteContentBoxDivText>
              <span>현재위치부터</span>
              <span>3분</span>
            </FavoriteContentBoxDivText>
          </FavoriteContentBoxLi>
          {/* 즐겨찾기 가게 */}
          <FavoriteContentBoxLi>
            <div>
              <FavoriteContentBoxDivImg src={JejuBilliard} alt="제주당구장" />
            </div>
            <FavoriteContentBoxDivTitle>
              <span>제주당구장</span>
              <StarSpan>☆</StarSpan>
            </FavoriteContentBoxDivTitle>
            <FavoriteContentBoxDivText>
              <span>남은 자리</span>
              <span>1/6</span>
            </FavoriteContentBoxDivText>
            <FavoriteContentBoxDivText>
              <span>요금</span>
              <span>1000원/10분</span>
            </FavoriteContentBoxDivText>
            <FavoriteContentBoxDivText>
              <span>현재위치부터</span>
              <span>3분</span>
            </FavoriteContentBoxDivText>
          </FavoriteContentBoxLi>
        </FavoriteContentBoxUl>
      </FavoriteContentBoxWrapper>
    </>
  );
};
export default FavoriteContentBox;

const FavoriteContentBoxWrapper = styled.article`
  width: 100%;
  overflow: hidden;
`;

const FavoriteContentBoxUl = styled.ul`
  width: 100%;
  display: flex;
`;

const FavoriteContentBoxLi = styled.li`
  border-radius: 10px;
  width: 120px;
  background-color: #d9d9d9;
  margin-right: 16px;
  width: 105px;
  max-width: 105px;
`;

const FavoriteContentBoxDivImg = styled.img`
  width: 90px;
  // height: 90px;
  margin: 7px;
  border-radius: 10px;
`;

const FavoriteContentBoxDivTitle = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const StarSpan = styled.span`
  color: black;
  cursor: pointer;
`;

const FavoriteContentBoxDivText = styled.div`
  font-size: 10px;
  zoom: 0.9;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
`;
