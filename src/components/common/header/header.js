import styled from "styled-components";
import FixedDummy from "./fixedDummy";
import MainLogo from "./mainLogo";
import ProfileIcon from "./profileIcon";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HomeIcon from "./homeIcon";

const Header = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/");

  return (
    <>
      <HeaderWrap>
        {isHome ? null : <HomeIcon />}
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
  max-width: 500px;
  padding: 15px 0;
  display: flex;
  background-color: #fff;
  position: fixed;
  z-index: 999;
`;
