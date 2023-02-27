import styled from "styled-components";

const ProfileSetting = () => {
  return (
    <>
      <ProfileSettingWrapper>
        <ProfileSettingType>개인 계정</ProfileSettingType>
        <ProfileSettingUl>
          <ProfileSettingLi>로그인 이메일 변경</ProfileSettingLi>
          <ProfileSettingLi>비밀번호 변경</ProfileSettingLi>
          <ProfileSettingLi>핸드폰 번호 변경</ProfileSettingLi>
        </ProfileSettingUl>
      </ProfileSettingWrapper>
    </>
  );
};
export default ProfileSetting;

const ProfileSettingWrapper = styled.div`
  margin-bottom: 1.3em;
`;

const ProfileSettingType = styled.p`
  font-weight: bold;
  margin-bottom: 0.4em;
`;

const ProfileSettingUl = styled.ul`
  list-style: none;
  margin-top: 0%;
  padding-left: 20px;
`;

const ProfileSettingLi = styled.li`
  margin-bottom: 0.2em;
  font-weight: 300;
`;
