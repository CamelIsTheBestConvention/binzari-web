import styled from "styled-components";
import OtherFilterIcon from "../../images/storeImages/otherFilter.png";
import DownArrow from "../../images/storeImages/downArrow.png";
import UpArrow from "../../images/storeImages/upArrow.png";
import { useState, useRef } from "react";

const StoreThirdHeader = () => {
  const [smokeMenuOn, setSmokeMenuOn] = useState(false);
  const [eatMenuOn, setEatMenuOn] = useState(false);
  const smokeMenuOpen = useRef(null);
  const eatMenuOpen = useRef(null);

  const SmokeMenuHandler = () => {
    setSmokeMenuOn(!smokeMenuOn);
    smokeMenuOn
      ? (smokeMenuOpen.current.style.display = "none")
      : (smokeMenuOpen.current.style.display = "block");
  };

  const EatMenuHandler = () => {
    setEatMenuOn(!eatMenuOn);
    eatMenuOn
      ? (eatMenuOpen.current.style.display = "none")
      : (eatMenuOpen.current.style.display = "block");
  };

  const [smokeFilter, setSmokeFilter] = useState("흡연 여부");
  const [eatFilter, setEatFilter] = useState("취식 여부");

  const SmokeFilterHandler = (e) => {
    const smokeValue = e.target.value;

    switch (smokeValue) {
      case 1:
        setSmokeFilter("전체");
        break;
      case 2:
        setSmokeFilter("흡연 매장");
        break;
      case 3:
        setSmokeFilter("비흡연 매장");
        break;
    }
    setSmokeMenuOn(!smokeMenuOn);
    smokeMenuOpen.current.style.display = "none";
  };

  const EatFilterHandler = (e) => {
    const eatValue = e.target.value;

    switch (eatValue) {
      case 1:
        setEatFilter("음식 배달가능");
        break;
      case 2:
        setEatFilter("음식 반입가능");
        break;
      case 3:
        setEatFilter("음료만 반입가능");
        break;
      case 4:
        setEatFilter("취식 불가");
        break;
    }
    setEatMenuOn(!eatMenuOn);
    eatMenuOpen.current.style.display = "none";
  };
  return (
    <>
      <StoreThirdWrapper>
        {/* 종목 필터 */}
        <ThirdHeaderFilter>
          <OtherFilterImg src={OtherFilterIcon} />
          {/* 필터목록 */}
          <OtherFilterDiv>
            <div style={{ width: "100%" }}>
              <OtherFilterInput value={smokeFilter} readonly />
              <OtherFilterUl ref={smokeMenuOpen}>
                <OtherFilterLi value="1" onClick={SmokeFilterHandler}>
                  전체
                </OtherFilterLi>
                <OtherFilterLi value="2" onClick={SmokeFilterHandler}>
                  흡연 매장
                </OtherFilterLi>
                <OtherFilterLi value="3" onClick={SmokeFilterHandler}>
                  비흡연 매장
                </OtherFilterLi>
              </OtherFilterUl>
            </div>
            {smokeMenuOn ? (
              <DownImg src={UpArrow} onClick={SmokeMenuHandler} />
            ) : (
              <DownImg src={DownArrow} onClick={SmokeMenuHandler} />
            )}
          </OtherFilterDiv>

          <OtherFilterDiv>
            <div style={{ width: "100%" }}>
              <OtherFilterInput value={eatFilter} readonly />
              <OtherFilterUl ref={eatMenuOpen}>
                <OtherFilterLi value="1" onClick={EatFilterHandler}>
                  음식 배달가능
                </OtherFilterLi>
                <OtherFilterLi value="2" onClick={EatFilterHandler}>
                  음식 반입가능
                </OtherFilterLi>
                <OtherFilterLi value="3" onClick={EatFilterHandler}>
                  음료만 반입가능
                </OtherFilterLi>
                <OtherFilterLi value="4" onClick={EatFilterHandler}>
                  취식 불가
                </OtherFilterLi>
              </OtherFilterUl>
            </div>
            {eatMenuOn ? (
              <DownImg src={UpArrow} onClick={EatMenuHandler} />
            ) : (
              <DownImg src={DownArrow} onClick={EatMenuHandler} />
            )}
          </OtherFilterDiv>
        </ThirdHeaderFilter>
      </StoreThirdWrapper>
    </>
  );
};
export default StoreThirdHeader;

const StoreThirdWrapper = styled.article`
  width: 85%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px auto;
`;

const ThirdHeaderFilter = styled.article`
  display: flex;
`;

const OtherFilterImg = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin: auto;
`;

const OtherFilterDiv = styled.article`
  border: 1px solid black;
  border-radius: 0.7rem;
  padding: 0.3rem 0.5rem;
  display: flex;
  margin-left: 0.3rem;
  position: relative;
`;

const OtherFilterInput = styled.input`
  border: none;
  width: 6rem;
  font-weight: 700;
  font-size: 0.9rem;
  outline: none;
  padding: 0 0 0 1px;
  margin-bottom: 0.2rem;
`;

const OtherFilterUl = styled.ul`
  width: 88%;
  top: 100%;
  background-color: #fff;
  display: none;
  position: absolute;
  top: 74%;
  left: -1%;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 0.7rem 0.7rem;
  padding: 0.5rem;
`;

const OtherFilterLi = styled.li`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.3rem 0;
`;

const DownImg = styled.img`
  width: 0.9rem;
  height: 0.8rem;
  margin-top: 0.2rem;
`;
