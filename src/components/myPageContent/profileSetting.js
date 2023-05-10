import styled from "styled-components";
import { useState } from "react";
import PwModal from "./pwModal";

const ProfileSetting = () => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <ProfileSettingWrapper>
        <ProfileSettingType>개인 계정</ProfileSettingType>
        <ProfileSettingUl>
          <ProfileSettingLi>프로필 이미지 변경</ProfileSettingLi>
          <ProfileSettingLi onClick={showModal}>비밀번호 변경</ProfileSettingLi>
          <ProfileSettingLi>핸드폰 번호 변경</ProfileSettingLi>
        </ProfileSettingUl>
        {modalOpen && <PwModal setModalOpen={setModalOpen} />}
      </ProfileSettingWrapper>
    </>
  );
};
export default ProfileSetting;

const ProfileSettingWrapper = styled.div`
  margin-bottom: 1.3em;
`;

const ProfileSettingType = styled.p`
  font-size: 1.1rem;
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
  font-weight: 500;
  cursor: pointer;
`;
