import styled from "styled-components";
import LeisureFilterIcon from "../../images/storeImages/leisureType.png";
import FilterIcon from "../../images/storeImages/filter.png";
import DownArrow from "../../images/storeImages/downArrow.png";
import UpArrow from "../../images/storeImages/upArrow.png";
import { useState, useRef } from "react";

const StoreSecondHeader = () => {
  const [menuOn, setMenuOn] = useState(false);
  const menuOpen = useRef(null);

  const MenuHandler = () => {
    setMenuOn(!menuOn);
    menuOpen.current.styled.display = "block";
  };

  const [leisureFilter, setLeisureFilter] = useState("당구장");

  const LeisureFilterHandler = (e) => {
    e.target.value();
  };

  return (
    <>
      <StoreSecondWrapper>
        {/* 종목 필터 */}
        <SecondHeaderLeisure>
          <LeisureFilterImg src={LeisureFilterIcon} />
          {/* 필터목록 */}
          <LeisureFilterDiv onClick={MenuHandler}>
            <LeisureFilterInput value={leisureFilter} readonly />
            <LeisureFilterUl ref={menuOpen}>
              <LeisureFilterLi value="1" onClick={LeisureFilterHandler}>
                당구장
              </LeisureFilterLi>
              <LeisureFilterLi>볼링장</LeisureFilterLi>
              <LeisureFilterLi>노래방</LeisureFilterLi>
              <LeisureFilterLi>PC방</LeisureFilterLi>
            </LeisureFilterUl>
            {menuOn ? <DownImg src={UpArrow} /> : <DownImg src={DownArrow} />}
          </LeisureFilterDiv>
        </SecondHeaderLeisure>
        {/* 순서 필터 */}
        <SecondHeaderFilter>
          <FilterImg src={FilterIcon} />
          {/* 필터목록 */}
          <LeisureFilterDiv>
            <LeisureFilterUl>
              <LeisureFilterLi>거리 가까운순</LeisureFilterLi>
            </LeisureFilterUl>
            <DownImg src={DownArrow} />
          </LeisureFilterDiv>
        </SecondHeaderFilter>
      </StoreSecondWrapper>
    </>
  );
};
export default StoreSecondHeader;

const StoreSecondWrapper = styled.article`
  width: 85%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px auto;
`;

const SecondHeaderLeisure = styled.article`
  display: flex;
`;

const LeisureFilterImg = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin: auto;
`;

const LeisureFilterDiv = styled.article`
  border: 1px solid black;
  border-radius: 0.7rem;
  padding: 0.3rem 0.5rem;
  display: flex;
  margin-left: 0.3rem;
  height: 0.9rem;
  position: relative;
`;

const LeisureFilterInput = styled.input`
  border: none;
  width: 4rem;
  font-weight: 700;
  font-size: 0.9rem;
  outline: none;
`;

const LeisureFilterUl = styled.ul`
  margin-right: 0.5rem;
  font-size: 0.9rem;
  //   display: none;
  position: absolute;
  top: 100%;
  background-color: #fff;
`;

const LeisureFilterLi = styled.li``;

const DownImg = styled.img`
  width: 0.9rem;
  height: 0.8rem;
  margin-top: 0.1rem;
`;

const SecondHeaderFilter = styled.article`
  display: flex;
`;

const FilterImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin: auto;
`;
