import styled from "styled-components";
import ProfileBlackList from "./profileBlackList";
import ProfileFavorite from "./profileFavorite";
import ProfileSetting from "./profileSetting";

const MyProfileDetail = () => {
  return (
    <>
      <DetailWrapper>
        <ProfileSetting />
        <ProfileFavorite />
        <ProfileBlackList />
      </DetailWrapper>
    </>
  );
};
export default MyProfileDetail;

const DetailWrapper = styled.div`
  margin-top: 1.8em;
`;
