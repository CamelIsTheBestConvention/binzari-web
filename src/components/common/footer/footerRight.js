import styled from "styled-components";

const FooterRight = () => {
  return (
    <>
      <RightWrapper>
        <p style={{ paddingRight: "4px", margin: "2px" }}>사업자정보확인</p>
        <p style={{ paddingRight: "4px", margin: "2px" }}>이용약관</p>
        <p style={{ paddingRight: "4px", margin: "2px" }}>
          전자금융거래이용약관
        </p>
        <p style={{ paddingRight: "4px", margin: "2px" }}>개인정보처리방침</p>
        <p style={{ paddingRight: "4px", margin: "2px" }}>더보기</p>
      </RightWrapper>
    </>
  );
};
export default FooterRight;

const RightWrapper = styled.div`
  font-size: 0.625rem;
  zoom: 0.9;
  text-align: right;
  border-right: 1px solid black;
  height: 80px;
`;
