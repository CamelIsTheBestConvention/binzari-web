import styled from "styled-components";
import DetailInfoList from "./detailInfoList";

const DetailInfo = () => {
  return (
    <>
      <DetailInfoWrapper>
        <DetailInfoList />
        <DetailInfoList />
        <DetailInfoList />
      </DetailInfoWrapper>
    </>
  );
};
export default DetailInfo;

const DetailInfoWrapper = styled.article`
  width: 100%;
`;
