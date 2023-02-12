import styled from "styled-components";
import FooterLeftAddress from "./footerLeftAddress";
import FooterLeftMaster from "./footerLeftMaster";
import FooterLeftPhone from "./footerLeftPhone";
import FooterLeftTime from "./footerLeftTime";

const FooterLeft = () => {
  return (
    <>
      <FooterLeftWrapper>
        <FooterLeftPhone />
        <FooterLeftTime />
        <FooterLeftMaster />
        <FooterLeftAddress />
      </FooterLeftWrapper>
    </>
  );
};
export default FooterLeft;

const FooterLeftWrapper = styled.div`
  font-size: 0.625rem;
`;
