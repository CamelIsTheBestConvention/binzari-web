import styled from "styled-components";
import JejuBilliard from "../../images/homeImages/jejuBilliard.jpg";
import React, { useState } from "react";

const FavoriteContentBoxLi = () => {
  const [star, setStar] = useState(false);

  const starStyle = {
    color: star ? "black" : "yellow",
  };

  const boxStyle = {
    display: star ? "none" : "block",
  };

  const handleClick = () => {
    window.confirm("관심목록에서 삭제하시겠습니까?");
    setStar(!star);
  };

  return (
    <>
      <FavoriteContentBoxLiWrapper style={boxStyle}>
        <div>
          <div>
            <FavoriteContentBoxDivImg src={JejuBilliard} alt="제주당구장" />
          </div>
          <FavoriteContentBoxDivTitle>
            <span>제주당구장</span>
            <StarSpan onClick={handleClick} style={starStyle}>
              {star ? "☆" : "★"}
            </StarSpan>
          </FavoriteContentBoxDivTitle>
          <FavoriteContentBoxDivText>
            <span>남은 자리</span>
            <span>1/6</span>
          </FavoriteContentBoxDivText>
          <FavoriteContentBoxDivText>
            <span>요금</span>
            <span>1000원/10분</span>
          </FavoriteContentBoxDivText>
          <FavoriteContentBoxDivText>
            <span>현재위치부터</span>
            <span>3분</span>
          </FavoriteContentBoxDivText>
        </div>
      </FavoriteContentBoxLiWrapper>
    </>
  );
};
export default FavoriteContentBoxLi;

const FavoriteContentBoxLiWrapper = styled.li`
  width: 33%;
  max-width: 50%;
  border-radius: 10px;
  background-color: #d9d9d9;
  margin: 0 3.6%;

  @media (max-width: 420px) {
    width: 40%;
    margin: 0 8.5%;
  }
`;

const FavoriteContentBoxDivImg = styled.img`
  width: 90px;
  // height: 90px;
  margin: 7px;
  border-radius: 10px;
`;

const FavoriteContentBoxDivTitle = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const StarSpan = styled.span`
  color: black;
  cursor: pointer;
  margin-top: -2px;
`;

const FavoriteContentBoxDivText = styled.div`
  font-size: 10px;
  zoom: 0.9;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
`;
