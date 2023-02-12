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
        <FixedDummy />
      </HeaderWrap>
    </>
  );
};
export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  background-color: #fff;
  position: fixed;
`;
