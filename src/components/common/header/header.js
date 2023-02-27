import styled from "styled-components";
import FixedDummy from "./fixedDummy";
import HomeIcon from "./homeIcon";
import MainLogo from "./mainLogo";
import ProfileIcon from "./profileIcon";

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <HomeIcon />
        <MainLogo />
        <ProfileIcon />
      </HeaderWrap>
      <FixedDummy />
    </>
  );
};
export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 15px 0;
  display: flex;
  background-color: #fff;
  position: fixed;
`;
