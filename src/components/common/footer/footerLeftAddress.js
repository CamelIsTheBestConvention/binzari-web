import styled from "styled-components";

const FooterLeftAddress = () => {
  return (
    <>
      <AddressWrapper>
        <AddressTitle>주소</AddressTitle>
        <AddressInfo>서울특별시 강남구 테헤란로 146</AddressInfo>
      </AddressWrapper>
    </>
  );
};
export default FooterLeftAddress;

const AddressWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const AddressTitle = styled.p`
  padding-right: 3px;
  border-right: 1px solid grey;
  width: 45px;
  height: 14px;
  margin: auto 0;
`;

const AddressInfo = styled.span`
  margin-left: 4px;
`;
