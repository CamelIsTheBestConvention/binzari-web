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
  margin-left: 1em;
`;

const ProfileNickName = styled.p`
  margin: 3px 0px;
  font-weight: bold;
`;

const ArrowImg = styled.img`
  height: 12px;
`;

const ProfileType = styled.p`
  margin: 3px 0px;
  font-size: small;
`;
