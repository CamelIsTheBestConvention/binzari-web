import styled from "styled-components";
import FooterLeft from "./footerLeft";
import FooterRight from "./footerRight";

const FooterInfo = () => {
  return (
    <>
      <FooterInfoWrapper>
        <FooterLeft />
        <FooterRight />
      </FooterInfoWrapper>
    </>
  );
};
export default FooterInfo;

const FooterInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
