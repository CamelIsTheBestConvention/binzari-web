import styled from "styled-components";
import alertIcon from "../../../images/headerImages/bell.png";
import userIcon from "../../../images/headerImages/user.png";
import loginIcon from "../../../images/headerImages/login.png";
import React, { useState } from "react";

const ProfileIcon = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <RightIconWrapper>
        <a style={{ marginRight: "10px" }}>
          <AlertImg src={alertIcon} />
        </a>
        <a href="/login">
          {isLoggedIn ? (
            <LoginImg src={userIcon} alt="loginBtn" />
          ) : (
            <LoginImg src={loginIcon} alt="mypageBtn" />
          )}
        </a>
      </RightIconWrapper>
    </>
  );
};
export default ProfileIcon;

const RightIconWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 17px;
`;

const LoginImg = styled.img`
  cursor: pointer;
`;

const AlertImg = styled.img`
  cursor: pointer;
`;
