import styled from "styled-components";
import homeLogo from "../../../images/headerImages/home.png";

const HomeIcon = () => {
  return (
    <>
      <HomeIconWrapper>
        <a href="/home">
          <HomeImg src={homeLogo} />
        </a>
      </HomeIconWrapper>
    </>
  );
};
export default HomeIcon;

const HomeIconWrapper = styled.div`
  position: absolute;
  top: 17px;
  left: 50px;
`;

const HomeImg = styled.img`
  cursor: pointer;
`;
