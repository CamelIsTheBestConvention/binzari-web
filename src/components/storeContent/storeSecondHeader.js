import styled from "styled-components";
import LeisureFilterIcon from "../../images/storeImages/leisureType.png";
import FilterIcon from "../../images/storeImages/filter.png";
import DownArrow from "../../images/storeImages/downArrow.png";
import UpArrow from "../../images/storeImages/upArrow.png";
import { useState, useRef } from "react";

const StoreSecondHeader = () => {
  const [leisureMenuOn, setLeisureMenuOn] = useState(false);
  const [distanceMenuOn, setDistanceMenuOn] = useState(false);
  const leisureMenuOpen = useRef(null);
  const distanceMenuOpen = useRef(null);

  const LeisureMenuHandler = () => {
    setLeisureMenuOn(!leisureMenuOn);
    leisureMenuOn
      ? (leisureMenuOpen.current.style.display = "none")
      : (leisureMenuOpen.current.style.display = "block");
  };

  const DistanceMenuHandler = () => {
    setDistanceMenuOn(!distanceMenuOn);
    distanceMenuOn
      ? (distanceMenuOpen.current.style.display = "none")
      : (distanceMenuOpen.current.style.display = "block");
  };

  const [leisureFilter, setLeisureFilter] = useState("당구장");
  const [distanceFilter, setDistanceFilter] = useState("인기 순");

  const LeisureFilterHandler = (e) => {
    const leisureValue = e.target.value;

    switch (leisureValue) {
      case 1:
        setLeisureFilter("당구장");
        break;
      case 2:
        setLeisureFilter("볼링장");
        break;
      case 3:
        setLeisureFilter("노래방");
        break;
      case 4:
        setLeisureFilter("PC방");
        break;
      case 5:
        setLeisureFilter("골프");
        break;
    }
    setLeisureMenuOn(!leisureMenuOn);
    leisureMenuOpen.current.style.display = "none";
  };

  const DistanceFilterHandler = (e) => {
    const leisureValue = e.target.value;

    switch (leisureValue) {
      case 1:
        setDistanceFilter("인기 순");
        break;
      case 2:
        setDistanceFilter("요금 낮은 순");
        break;
      case 3:
        setDistanceFilter("요금 비싼 순");
        break;
      case 4:
        setDistanceFilter("거리 가까운 순");
        break;
      case 5:
        setDistanceFilter("자리 많은 순");
        break;
    }
    setDistanceMenuOn(!distanceMenuOn);
    distanceMenuOpen.current.style.display = "none";
  };

  return (
    <>
      <StoreSecondWrapper>
        {/* 종목 필터 */}
        <SecondHeaderLeisure>
          <LeisureFilterImg src={LeisureFilterIcon} />
          {/* 필터목록 */}
          <LeisureFilterDiv>
            <div style={{ width: "100%" }}>
              <LeisureFilterInput value={leisureFilter} readonly />
              <LeisureFilterUl ref={leisureMenuOpen}>
                <LeisureFilterLi value="1" onClick={LeisureFilterHandler}>
                  당구장
                </LeisureFilterLi>
                <LeisureFilterLi value="2" onClick={LeisureFilterHandler}>
                  볼링장
                </LeisureFilterLi>
                <LeisureFilterLi value="3" onClick={LeisureFilterHandler}>
                  노래방
                </LeisureFilterLi>
                <LeisureFilterLi value="4" onClick={LeisureFilterHandler}>
                  PC방
                </LeisureFilterLi>
                <LeisureFilterLi value="5" onClick={LeisureFilterHandler}>
                  골프
                </LeisureFilterLi>
              </LeisureFilterUl>
            </div>
            {leisureMenuOn ? (
              <DownImg src={UpArrow} onClick={LeisureMenuHandler} />
            ) : (
              <DownImg src={DownArrow} onClick={LeisureMenuHandler} />
            )}
          </LeisureFilterDiv>
        </SecondHeaderLeisure>
        {/* 순서 필터 */}
        <SecondHeaderFilter>
          <FilterImg src={FilterIcon} />
          {/* 필터목록 */}
          <DistanceFilterDiv>
            <div style={{ width: "100%" }}>
              <DistanceFilterInput value={distanceFilter} readonly />
              <DistanceFilterUl ref={distanceMenuOpen}>
                <DistanceFilterLi value="1" onClick={DistanceFilterHandler}>
                  인기 순
                </DistanceFilterLi>
                <DistanceFilterLi value="2" onClick={DistanceFilterHandler}>
                  요금 낮은 순
                </DistanceFilterLi>
                <DistanceFilterLi value="3" onClick={DistanceFilterHandler}>
                  요금 비싼 순
                </DistanceFilterLi>
                <DistanceFilterLi value="4" onClick={DistanceFilterHandler}>
                  거리 가까운 순
                </DistanceFilterLi>
                <DistanceFilterLi value="5" onClick={DistanceFilterHandler}>
                  자리 많은 순
                </DistanceFilterLi>
              </DistanceFilterUl>
            </div>
            {distanceMenuOn ? (
              <DownImg src={UpArrow} onClick={DistanceMenuHandler} />
            ) : (
              <DownImg src={DownArrow} onClick={DistanceMenuHandler} />
            )}
          </DistanceFilterDiv>
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
  margin-top: 0.3rem;
`;

const LeisureFilterDiv = styled.article`
  border: 1px solid black;
  border-radius: 0.7rem;
  padding: 0.3rem 0.5rem;
  display: flex;
  margin-left: 0.3rem;
  position: relative;
`;

const LeisureFilterInput = styled.input`
  border: none;
  width: 4rem;
  font-weight: 700;
  font-size: 0.9rem;
  outline: none;
  padding: 0 0 0 1px;
  margin-bottom: 0.2rem;
`;

const LeisureFilterUl = styled.ul`
  width: 83%;
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
  z-index: 5;
`;

const LeisureFilterLi = styled.li`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.3rem 0;
`;

const DownImg = styled.img`
  width: 0.9rem;
  height: 0.8rem;
  margin-top: 0.2rem;
`;

const SecondHeaderFilter = styled.article`
  display: flex;
`;

const FilterImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-top: 0.3rem;
`;

const DistanceFilterDiv = styled.article`
  border: 1px solid black;
  border-radius: 0.7rem;
  padding: 0.3rem 0.5rem;
  display: flex;
  margin-left: 0.3rem;
  position: relative;
`;

const DistanceFilterInput = styled.input`
  border: none;
  width: 6rem;
  font-weight: 700;
  font-size: 0.9rem;
  outline: none;
  padding: 0 0 0 1px;
  margin-bottom: 0.2rem;
`;

const DistanceFilterUl = styled.ul`
  width: 87.5%;
  top: 100%;
  background-color: #fff;
  display: none;
  position: absolute;
  top: 74%;
  left: -1px;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 0.7rem 0.7rem;
  padding: 0.5rem;
  z-index: 5;
`;

const DistanceFilterLi = styled.li`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.3rem 0;
`;
