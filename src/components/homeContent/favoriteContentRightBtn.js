import styled from "styled-components";
import NextBtn from "../../images/homeImages/rightBtn.png";
import React, { useState } from "react";

const FavoriteContentRightBtn = () => {
  const [move, setMove] = useState(false);

  const handleSlide = () => {
    setMove(!move);
  };
  return (
    <>
      <FavoriteContentRightBtnWrapper onClick={handleSlide}>
        <img src={NextBtn} alt="다음 버튼" />
      </FavoriteContentRightBtnWrapper>
    </>
  );
};
export default FavoriteContentRightBtn;

const FavoriteContentRightBtnWrapper = styled.button`
  // width: 5%;
  background-color: #fff;
  border: none;
  font-size: 15px;
  // margin: 10px;
  cursor: pointer;
`;
