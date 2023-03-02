import styled from "styled-components";
import FavoriteContentBox from "./favoriteContentBox";
import FavoriteContentLeftBtn from "./favoriteContentLeftBtn";
import FavoriteContentRightBtn from "./favoriteContentRightBtn";

const HomeFavoriteContent = () => {
  return (
    <>
      <div>
        <HomeFavoriteContentWrapper>
          <FavoriteContentLeftBtn />
          <FavoriteContentBox />
          <FavoriteContentRightBtn />
        </HomeFavoriteContentWrapper>
      </div>
    </>
  );
};
export default HomeFavoriteContent;

const HomeFavoriteContentWrapper = styled.article`
  display: flex;
  justify-content: space-between;
`;
