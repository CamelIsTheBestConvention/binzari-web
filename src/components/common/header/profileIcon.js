import styled from "styled-components";
import alertIcon from "../../../images/headerImages/bell.png";
import userIcon from "../../../images/headerImages/user.png";

const ProfileIcon = () => {
  return (
    <>
      <RightIconWrapper>
        <a style={{ marginRight: "10px" }}>
          <img src={alertIcon} />
        </a>
        <a>
          <img src={userIcon} />
        </a>
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
