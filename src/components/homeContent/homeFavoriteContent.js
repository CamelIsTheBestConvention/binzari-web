import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import FavoriteContentBoxLi from "./favoriteContentBoxLi";
import NextBtn from "../../images/homeImages/rightBtn.png";
import PrevBtn from "../../images/homeImages/leftBtn.png";

const HomeFavoriteContent = () => {
  const [position, setPosition] = useState(0);
  const contentUlRef = useRef(null);
  const [liWidth, setLiWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const mediaQuery400 = window.matchMedia("(max-width: 420px)");

  useEffect(() => {
    if (contentUlRef.current) {
      setLiWidth(contentUlRef.current.children[0].offsetWidth);
      const ulWidth = contentUlRef.current.offsetWidth;
      setVisibleCount(Math.floor(ulWidth / liWidth));
    }
  }, [liWidth, mediaQuery400.matches]);

  const handlePrev = () => {
    const liCount = contentUlRef.current.children.length;
    const minPosition = 0;
    const maxPosition = mediaQuery400.matches
      ? -(liCount - 2) * 50
      : -(liCount - 3) * 33;
    setPosition((prevPosition) => Math.min(prevPosition + 33, minPosition));
    setNextDisabled(false);
    if (position + 33 === minPosition) {
      setPrevDisabled(true);
    }
    if (window.innerWidth <= 420) {
      // max-width가 420px 이하일 때만 실행
      setPosition((prevPosition) => Math.max(prevPosition + 16.5, maxPosition));
    }
  };

  const handleNext = () => {
    const liCount = contentUlRef.current.children.length;
    const maxPosition = mediaQuery400.matches
      ? -(liCount - 2) * 50
      : -(liCount - 3) * 33;
    setPosition((prevPosition) => Math.max(prevPosition - 33, maxPosition));
    setPrevDisabled(false);
    if (position - 33 === maxPosition) {
      setNextDisabled(true);
    }
    if (window.innerWidth <= 420) {
      // max-width가 420px 이하일 때만 실행
      setPosition((prevPosition) => Math.max(prevPosition - 16.5, maxPosition));
    }
  };

  return (
    <>
      <div>
        <HomeFavoriteContentWrapper>
          <FavoriteContentBtnWrapper onClick={handlePrev}>
            <img src={PrevBtn} alt="이전 버튼" />
          </FavoriteContentBtnWrapper>
          <FavoriteContentBoxWrapper>
            <FavoriteContentBoxUl
              ref={contentUlRef}
              style={{ transform: `translateX(${position}%)` }}
            >
              {/* 즐겨찾기 가게 */}
              <FavoriteContentBoxLi />
              <FavoriteContentBoxLi />
              <FavoriteContentBoxLi />
              <FavoriteContentBoxLi />
              <FavoriteContentBoxLi />
              <FavoriteContentBoxLi />
              <FavoriteContentBoxLi />
              <FavoriteContentBoxLi />
            </FavoriteContentBoxUl>
          </FavoriteContentBoxWrapper>
          <FavoriteContentBtnWrapper onClick={handleNext}>
            <img src={NextBtn} alt="다음 버튼" />
          </FavoriteContentBtnWrapper>
        </HomeFavoriteContentWrapper>
      </div>
    </>
  );
};

export default HomeFavoriteContent;

const HomeFavoriteContentWrapper = styled.article`
  display: flex;
  justify-content: space-between;
`;

const FavoriteContentBoxWrapper = styled.article`
  width: 100%;
  overflow: hidden;
`;

const FavoriteContentBoxUl = styled.ul`
  width: 100%;
  // overflow: hidden;
  flex-wrap: nowrap;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
`;

const FavoriteContentBtnWrapper = styled.button`
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
