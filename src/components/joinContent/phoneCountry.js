import styled from "styled-components";
import SouthKoreaImg from "../../images/joinImages/southKorea.png";
import downArrowImg from "../../images/joinImages/downArrow.png";

const PhoneCountry = () => {
  return (
    <>
      <PhoneCountryWrapper>
        <PhoneCountryWrapperUl>
          <PhoneCountryWrapperLi>
            <PhoneCountryWrapperDiv1>
              <CountryFlag src={SouthKoreaImg}></CountryFlag>
              <CountryName>대한민국</CountryName>
            </PhoneCountryWrapperDiv1>
            <PhoneCountryWrapperDiv2>
              <CountryNumber>+82</CountryNumber>
              <DownArrow src={downArrowImg} />
            </PhoneCountryWrapperDiv2>
          </PhoneCountryWrapperLi>
        </PhoneCountryWrapperUl>
      </PhoneCountryWrapper>
    </>
  );
};
export default PhoneCountry;

const PhoneCountryWrapper = styled.article`
  width: 100%;
  margin-bottom: 20px;
`;

const PhoneCountryWrapperUl = styled.ul`
  width: 90%;
  border: none;
  border-bottom: 1px solid #a0a0a0;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 20px;
  padding-bottom: 3px;
`;

const PhoneCountryWrapperLi = styled.li`
  display: flex;
  width: 100%;
`;

const PhoneCountryWrapperDiv1 = styled.div`
  display: flex;
  width: 33%;
  border-right: 1px solid black;
  justify-content: center;
`;

const CountryFlag = styled.img`
  width: 20px;
`;

const CountryName = styled.p`
  font-size: 0.8rem;
  margin-top: 4px;
  margin-left: 5px;
  text-align: center;
`;

const PhoneCountryWrapperDiv2 = styled.div`
  width: 75%;
  position: relative;
`;

const CountryNumber = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 3px;
`;

const DownArrow = styled.img`
  position: absolute;
  right: 0;
  top: 4px;
`;
