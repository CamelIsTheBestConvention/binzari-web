import styled from "styled-components";
import HomeFavorite from "../components/homeContent/homeFavorite";
import HomeHeader from "../components/homeContent/homeHeader";
import HomeLeisure from "../components/homeContent/homeLeisure";

const Home = () => {
  return (
    <>
      <HomeMain>
        <HomeWrapper>
          <HomeHeader />
          <HomeLeisure />
          <HomeFavorite />
        </HomeWrapper>
      </HomeMain>
    </>
  );
};
export default Home;

const HomeMain = styled.main`
  width: 80%;
  margin: 0 auto;
`;

const HomeWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;
