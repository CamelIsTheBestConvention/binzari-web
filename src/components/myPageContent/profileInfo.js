import styled from "styled-components";
import ProfileArrowImg from "../../images/myPageImages/arrow.jpg";
import React from "react";

const ProfileInfo = () => {
  const userName = sessionStorage.getItem("name");
  return (
    <>
      <ProfileInfoWrapper>
        <ProfileNickName>
          {userName}
          <ArrowImg src={ProfileArrowImg} />
        </ProfileNickName>
        <ProfileType>개인회원</ProfileType>
      </ProfileInfoWrapper>
    </>
  );
};
export default ProfileInfo;

const ProfileInfoWrapper = styled.div`
  display: inline-block;
  margin: auto 0 auto 1rem;
`;

const ProfileNickName = styled.p`
  margin: 3px 0px;
  font-weight: bold;
  font-size: 1.3rem;
`;

const ArrowImg = styled.img`
  height: 18px;
  margin-left: 0.3rem;
`;

const ProfileType = styled.p`
  margin: 3px 0px;
  font-size: 0.8rem;
`;
