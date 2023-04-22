import styled from "styled-components";
import alertIcon from "../../../images/headerImages/bell.png";
import userIcon from "../../../images/headerImages/user.png";
import loginIcon from "../../../images/headerImages/login.png";
import React, { useState, useEffect } from "react";

const ProfileIcon = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("name");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <RightIconWrapper>
        <a style={{ marginRight: "10px" }}>
          <AlertImg src={alertIcon} />
        </a>

        {isLoggedIn ? (
          <a href="/profile">
            <LoginImg src={userIcon} alt="mypageBtn" />
          </a>
        ) : (
          <a href="/login">
            <LoginImg src={loginIcon} alt="loginBtn" />
          </a>
        )}
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
