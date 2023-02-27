import styled from "styled-components";
import ProfileImg from "./profileImg";
import ProfileInfo from "./profileInfo";

const MyProfile = () => {
  return (
    <>
      <MyProfileWrapper>
        <ProfileImg />
        <ProfileInfo />
      </MyProfileWrapper>
    </>
  );
};
export default MyProfile;

const MyProfileWrapper = styled.div`
  display: flex;
  margin-bottom: 0.3em;
`;
