import styled from "styled-components";
import SearchBtnImg from "../../images/homeImages/search.png";

const HomeSearch = () => {
  return (
    <>
      <HomeSearchWrapper>
        <HomeSearchBox>
          <form action="https://search.naver.com/search.naver?value">
            <HomeFormWrapper>
              <SearchInput type="text" placeholder="어디로 가고 싶으세요?" />
              <SearchButton type="submit">
                <SearchButtonImg src={SearchBtnImg} />
              </SearchButton>
            </HomeFormWrapper>
          </form>
        </HomeSearchBox>
      </HomeSearchWrapper>
    </>
  );
};
export default HomeSearch;

const HomeSearchWrapper = styled.section`
  width: 90%;
  max-width: 420px;
  padding: 10px 0;
  margin: 0 auto;
`;

const HomeSearchBox = styled.article`
  margin: 0 10px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: white;
`;

const HomeFormWrapper = styled.article`
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 85%;
  margin-left: 1rem;
  height: 30px;
  border: none;
  border-radius: 10px;
  outline: none;
`;

const SearchButton = styled.button`
  cursor: pointer;
  width: 30px;
  background-color: white;
  border: none;
  border-radius: 10px;
  position: realative;
`;

const SearchButtonImg = styled.img`
  margin: auto;
`;
