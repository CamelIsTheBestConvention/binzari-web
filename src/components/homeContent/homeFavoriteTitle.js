import styled from "styled-components";
import FavoritePin from "../../images/homeImages/pin.png";

const HomeFavoriteTitle = () => {
  return (
    <>
      <HomeFavoriteTitleWrapper>
        <FavoritePinImg src={FavoritePin} alt="자주 찾는 매장" />
        <FavoriteTitleSpan>자주 찾는 매장</FavoriteTitleSpan>
      </HomeFavoriteTitleWrapper>
    </>
  );
};
export default HomeFavoriteTitle;

const HomeFavoriteTitleWrapper = styled.article`
  display: flex;
  margin: 0 10px 15px 10px;
`;
const FavoritePinImg = styled.img`
  width: 15px;
  height: 15px;
  margin: 2px 2px 0 0;
`;
const FavoriteTitleSpan = styled.span`
  font-size: 14px;
`;
