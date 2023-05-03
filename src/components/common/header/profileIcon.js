import styled from "styled-components";
import alertIcon from "../../../images/headerImages/bell.png";
import userIcon from "../../../images/headerImages/user.png";
import loginIcon from "../../../images/headerImages/login.png";
import React, { useState, useEffect } from "react";

const ProfileIcon = () => {
  // 로그인 시 아이콘 바꾸기
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("name");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // 알림창
  const [alarmOn, setAlarmOn] = useState(false);

  const openAlarm = () => {
    setAlarmOn(!alarmOn);
  };

  return (
    <>
      <RightIconWrapper>
        <AlertImg src={alertIcon} onClick={openAlarm} />

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
      {alarmOn && (
        <AlarmWrapper>
          <AlarmUl>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었을까 안되었을까?</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
            <AlarmLi>
              <AlarmP>당구장 예약이 완료되었습니다.</AlarmP>
              <AlarmTime>7:01 pm</AlarmTime>
            </AlarmLi>
          </AlarmUl>
        </AlarmWrapper>
      )}
    </>
  );
};
export default ProfileIcon;

const RightIconWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 17px;
`;

const LoginImg = styled.img`
  cursor: pointer;
`;

const AlertImg = styled.img`
  cursor: pointer;
  margin-right: 10px;
`;

const AlarmWrapper = styled.div`
  position: absolute;
  top: 4rem;
  left: 21%;
  width: 74%;
  height: 1207%;
  border-radius: 1rem;
  background-color: lightgray;
  opacity: 0.9;

  :after {
    display: block;
    content: "";
    position: absolute;
    top: -16px;
    right: 33px;
    width: 0px;
    height: 0px;
    border-right: 17px solid transparent;
    border-bottom: 16px solid lightgray;
  }
`;

const AlarmUl = styled.ul`
  width: 80%;
  height: 85%;
  margin: 1rem auto;
  padding: 1rem;
  overflow: auto;
`;

const AlarmLi = styled.li`
  border-bottom: 2px solid gray;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const AlarmP = styled.p`
  width: 70%;
  height: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.7rem;
`;

const AlarmTime = styled.span`
  font-size: 0.7rem;
`;
