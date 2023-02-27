import styled from "styled-components";
import ProfileFace from "../../images/myPageImages/personProfile.png";

const ProfileImg = () => {
  return (
    <>
      <ProfileImgWrapper>
        <ProfileImgImg src={ProfileFace} />
      </ProfileImgWrapper>
    </>
  );
};
export default ProfileImg;

const ProfileImgWrapper = styled.div`
  border-radius: 70%;
  max-width: 55px;
  max-height: 55px;
  overflow: hidden;
`;

const ProfileImgImg = styled.img`
  height: 100%;
  object-fit: cover;
`;
