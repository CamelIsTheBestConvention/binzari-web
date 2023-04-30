import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const DetailMap = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.5014308023247, 127.0350160416039),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.5014308023247,
      127.0350160416039
      // 이부분의 위,경도 또한 가끔 가는 카페입니다.. 놀라지마시길..!
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  return (
    <DetailMapWrapper>
      <KakaoMap id="myMap"></KakaoMap>
    </DetailMapWrapper>
  );
};

export default DetailMap;

const DetailMapWrapper = styled.div`
  width: 100%;
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 30vh;
  margin: 2rem 0;
  border-radius: 1rem;
`;
