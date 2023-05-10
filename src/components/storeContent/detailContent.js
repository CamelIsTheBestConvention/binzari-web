import styled from "styled-components";
import DetailProfile from "../../images/storeImages/detailProfile.png";
import { useState } from "react";

const DetailContent = () => {
  const [star, setStar] = useState(false);

  const starStyle = {
    color: star ? "yellow" : "black",
  };

  const handleClick = () => {
    setStar(!star);
    if (!star) {
      alert("즐겨찾기로 등록하겠습니까?");
    } else {
      alert("즐겨찾기를 해제하겠습니까?");
    }
  };

  return (
    <>
      <DetailContentWrapper>
        <DetailProfileWrapper>
          <DetailProfileImg src={DetailProfile} />
        </DetailProfileWrapper>
        <DetailNameWrapper>
          <DetailName>역삼당구장</DetailName>
          <DetailRecommend>4.2</DetailRecommend>
        </DetailNameWrapper>
        <DetailFavorite onClick={handleClick} style={starStyle}>
          {star ? "★" : "☆"}
        </DetailFavorite>
      </DetailContentWrapper>
    </>
  );
};
export default DetailContent;

const DetailContentWrapper = styled.article`
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 0.5rem;
`;

const DetailProfileWrapper = styled.article`
  width: 13%;
  padding: 1rem 0.8rem 1rem 0;
`;

const DetailProfileImg = styled.img`
  width: 100%;
`;

const DetailNameWrapper = styled.article`
  width: 87%;
  margin: auto 0;
`;

const DetailName = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

const DetailRecommend = styled.p`
  font-size: 1rem;
  color: #5ec48d;
  margin-left: 0.1rem;
`;

const DetailFavorite = styled.p`
  position: absolute;
  top: 20%;
  right: 0;
  cursor: pointer;
`;
