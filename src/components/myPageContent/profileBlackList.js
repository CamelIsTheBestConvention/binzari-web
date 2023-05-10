import styled from "styled-components";
import BusinessProfile from "../../images/myPageImages/businessProfile.png";
import Danggu from "../../images/myPageImages/danggu.jpg";

const ProfileBlackList = () => {
  return (
    <>
      <BlackListWrapper>
        <BlackListTitle>블랙리스트 매장 목록</BlackListTitle>
        <BlackListUl>
          <BlackListLi>
            <BlackListImgWrapper>
              <BusinessProfileImg src={BusinessProfile} />
            </BlackListImgWrapper>
            <BlackListInfo>
              <BlackListInfoTitle>강남당구장</BlackListInfoTitle>
              <BlackListInfoReason>바가지 씌움</BlackListInfoReason>
            </BlackListInfo>
          </BlackListLi>
          <BlackListLi>
            <BlackListImgWrapper>
              <BusinessProfileImg src={BusinessProfile} />
            </BlackListImgWrapper>
            <BlackListInfo>
              <BlackListInfoTitle>PC방</BlackListInfoTitle>
              <BlackListInfoReason>음식이 맛없음</BlackListInfoReason>
            </BlackListInfo>
          </BlackListLi>
        </BlackListUl>
      </BlackListWrapper>
    </>
  );
};
export default ProfileBlackList;

const BlackListWrapper = styled.div`
  margin-bottom: 1.3em;
`;

const BlackListTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.4em;
  font-size: 1.1rem;
`;

const BlackListUl = styled.ul`
  list-style: none;
  margin-top: 0%;
  padding-left: 20px;
`;

const BlackListLi = styled.li`
  margin-bottom: 0.2em;
  display: flex;
  margin-bottom: 0.3em;
`;

const BlackListImgWrapper = styled.div`
  border-radius: 70%;
  max-width: 55px;
  max-height: 55px;
  overflow: hidden;
`;

const BusinessProfileImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const BlackListInfo = styled.div`
  display: inline-block;
  margin-left: 1em;
`;

const BlackListInfoTitle = styled.p`
  margin: 3px 0px;
`;

const BlackListInfoReason = styled.p`
  margin: 3px 0px;
  font-size: small;
`;
