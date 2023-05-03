import Footer from "../components/common/footer/footer";
import Header from "../components/common/header/header";
import styled from "styled-components";
import DetailBoard from "../components/storeContent/detailBoard";
import DetailContent from "../components/storeContent/detailContent";
import DetailInfo from "../components/storeContent/detailInfo";
import DetailSeat from "../components/storeContent/detailSeat";
import DetailMap from "../components/storeContent/detailMap";
import { useState } from "react";

const Detail = () => {
  const [typeValue, setTypeValue] = useState("infomation");

  const typeSelect = (event) => {
    setTypeValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <Header />
      <DetailMain>
        <DetailWrapper>
          <DetailBoard />
          <DetailContent />
          <DetailInfoWrapper>
            <DetailInfoType>
              <DetailInfoInfo>
                <input
                  type="radio"
                  id="infomation"
                  name="info"
                  value="infomation"
                  onClick={typeSelect}
                  defaultChecked
                />
                <label for="infomation">정보</label>
              </DetailInfoInfo>
              <DetailInfoSeat>
                <input
                  type="radio"
                  id="seat"
                  name="info"
                  value="seat"
                  onClick={typeSelect}
                />
                <label for="seat">자리배치도</label>
              </DetailInfoSeat>
              <DetailInfoMap>
                <input
                  type="radio"
                  id="map"
                  name="info"
                  value="map"
                  onClick={typeSelect}
                />
                <label for="map">지도</label>
              </DetailInfoMap>
            </DetailInfoType>
            <DetailInfoBox>
              {typeValue === "infomation" && <DetailInfo />}
              {typeValue === "seat" && <DetailSeat />}
              {typeValue === "map" && <DetailMap />}
            </DetailInfoBox>
          </DetailInfoWrapper>
        </DetailWrapper>
      </DetailMain>
      <Footer />
    </>
  );
};
export default Detail;

const DetailMain = styled.main`
  width: 90%;
  min-height: 600px;
  max-width: 500px;
  margin: 0 auto;
`;

const DetailWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;

const DetailInfoWrapper = styled.section`
  width: 100%;
`;

const DetailInfoType = styled.article`
  width: 100%;

  display: flex;
  font-size: 0.9rem;
`;

const DetailInfoInfo = styled.article`
  width: 30%;
  text-align: center;

  > label {
    cursor: pointer;
  }

  > label::after {
    padding-bottom: 0.5rem;
    content: "";
    display: block;
    height: 2px;
    border-bottom: 1px solid #a0a0a0;
  }

  > input {
    display: none;
  }

  > input:checked + label::after {
    padding-bottom: 0.5rem;
    content: "";
    display: block;
    height: 2px;
    border-bottom: 2px solid #5ec48d;
  }
`;

const DetailInfoSeat = styled.article`
  width: 40%;
  text-align: center;
  cursor: pointer;

  > label {
    cursor: pointer;
  }

  > label::after {
    padding-bottom: 0.5rem;
    content: "";
    display: block;
    height: 2px;
    border-bottom: 1px solid #a0a0a0;
  }

  > input {
    display: none;
  }

  > input:checked + label::after {
    padding-bottom: 0.5rem;
    content: "";
    display: block;
    height: 2px;
    border-bottom: 2px solid #5ec48d;
  }
`;

const DetailInfoMap = styled.article`
  width: 30%;
  text-align: center;
  cursor: pointer;

  > label {
    cursor: pointer;
  }

  > label::after {
    padding-bottom: 0.5rem;
    content: "";
    display: block;
    height: 2px;
    border-bottom: 1px solid #a0a0a0;
  }

  > input {
    display: none;
  }

  > input:checked + label::after {
    padding-bottom: 0.5rem;
    content: "";
    display: block;
    height: 2px;
    border-bottom: 2px solid #5ec48d;
  }
`;

const DetailInfoBox = styled.section`
  width: 100%;
`;
