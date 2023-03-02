import styled from "styled-components";
import HomeFavoriteContent from "./homeFavoriteContent";
import HomeFavoriteTitle from "./homeFavoriteTitle";

const HomeFavorite = () => {
  return (
    <>
      <HomeFavoriteWrapper>
        <HomeFavoriteTitle />
        <HomeFavoriteContent />
      </HomeFavoriteWrapper>
    </>
  );
};
export default HomeFavorite;

const HomeFavoriteWrapper = styled.section`
  margin: 30px auto 30px auto;
  max-width: 600px;
`;
