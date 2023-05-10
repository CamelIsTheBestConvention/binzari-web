import styled from "styled-components";
import HomeFavorite from "../components/homeContent/homeFavorite";
import HomeHeader from "../components/homeContent/homeHeader";
import HomeLeisure from "../components/homeContent/homeLeisure";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <HomeMain>
        <HomeWrapper>
          <HomeHeader />
          <HomeLeisure />
          <HomeFavorite />
        </HomeWrapper>
      </HomeMain>
      <Footer />
    </>
  );
};
export default Home;

const HomeMain = styled.main`
  width: 90%;
  margin: 0 auto;
`;

const HomeWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
  position: relative;
`;
