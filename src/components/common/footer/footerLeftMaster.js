import styled from "styled-components";

const FooterLeftMaster = () => {
  return (
    <>
      <MasterWrapper>
        <MasterTitle>대표이사</MasterTitle>
        <MasterCompany>빈자리</MasterCompany>
      </MasterWrapper>
    </>
  );
};
export default FooterLeftMaster;

const MasterWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const MasterTitle = styled.p`
  padding-right: 3px;
  border-right: 1px solid grey;
  width: 45px;
  height: 14px;
  margin: auto 0;
`;

const MasterCompany = styled.span`
  margin-left: 4px;
`;
