import styled from "styled-components";
import BusinessProfile from "../../images/myPageImages/businessProfile.png";
import Danggu from "../../images/myPageImages/danggu.jpg";

const ProfileFavorite = () => {
  return (
    <>
      <FavoriteStoreWrapper>
        <FavoriteStoreTitle>단골 매장 목록</FavoriteStoreTitle>
        <FavoriteStoreUl>
          <FavoriteStoreLi>
            <FavoriteStoreImgWrapper>
              <BusinessProfileImg src={BusinessProfile} />
            </FavoriteStoreImgWrapper>
            <FavoriteStoreInfo>
              <FavoriteStoreInfoTitle>역삼당구장</FavoriteStoreInfoTitle>
              <FavoriteStoreInfoAddress>
                서울특별시 금천구 가산동 디지털로123
              </FavoriteStoreInfoAddress>
            </FavoriteStoreInfo>
          </FavoriteStoreLi>
          <FavoriteStoreLi>
            <FavoriteStoreImgWrapper>
              <BusinessProfileImg src={Danggu} />
            </FavoriteStoreImgWrapper>
            <FavoriteStoreInfo>
              <FavoriteStoreInfoTitle>역삼당구장</FavoriteStoreInfoTitle>
              <FavoriteStoreInfoAddress>
                서울특별시 금천구 가산동 디지털로123
              </FavoriteStoreInfoAddress>
            </FavoriteStoreInfo>
          </FavoriteStoreLi>
        </FavoriteStoreUl>
      </FavoriteStoreWrapper>
    </>
  );
};
export default ProfileFavorite;

const FavoriteStoreWrapper = styled.div`
  margin-bottom: 1.3em;
`;

const FavoriteStoreTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.4em;
  font-size: 1.1rem;
`;

const FavoriteStoreUl = styled.ul`
  list-style: none;
  margin-top: 0%;
  padding-left: 20px;
`;

const FavoriteStoreLi = styled.li`
  margin-bottom: 0.2em;
  display: flex;
  margin-bottom: 0.3em;
`;

const FavoriteStoreImgWrapper = styled.div`
  border-radius: 70%;
  width: 15%;
  height: 15%;
  overflow: hidden;
`;

const BusinessProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FavoriteStoreInfo = styled.div`
  display: inline-block;
  margin-left: 1em;
`;

const FavoriteStoreInfoTitle = styled.p`
  margin: 3px 0px;
`;

const FavoriteStoreInfoAddress = styled.p`
  margin: 3px 0px;
  font-size: small;
`;
