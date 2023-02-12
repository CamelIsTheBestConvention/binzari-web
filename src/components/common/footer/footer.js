import styled from "styled-components";
import FooterInfo from "./footerInfo";
import FooterLogo from "./footerLogo";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterWrapperReduce>
          <FooterLogo />
          <FooterInfo />
        </FooterWrapperReduce>
      </FooterWrapper>
    </>
  );
};
export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #dcdcdc;
`;

const FooterWrapperReduce = styled.div`
  padding: 10px;
`;
