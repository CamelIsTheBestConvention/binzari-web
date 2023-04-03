import styled from "styled-components";
import FooterInfo from "./footerInfo";
import FooterLogo from "./footerLogo";

const Footer = () => {
  return (
    <>
      <FooterDummy></FooterDummy>
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
  max-width: 500px;
  background-color: #dcdcdc;
  position: fixed;
  bottom: 0;
`;

const FooterWrapperReduce = styled.div`
  padding: 10px;
  margin 0 30px;
`;

const FooterDummy = styled.div`
  margin-top: 150px;
`;
