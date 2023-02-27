import styled from "styled-components";
import ProfileArrowImg from "../../images/myPageImages/arrow.jpg";

const ProfileInfo = () => {
  return (
    <>
      <ProfileInfoWrapper>
        <ProfileNickName>
          역삼동무법자
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
