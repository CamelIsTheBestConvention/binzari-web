import styled from "styled-components";
import NextBtn from "../../images/homeImages/rightBtn.png";
import React, { useState } from "react";

const FavoriteContentRightBtn = () => {
  return (
    <>
      <FavoriteContentRightBtnWrapper>
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

  :hover {
    background-color: lightgray;
    opacity: 0.3;
  }
`;
