import styled from "styled-components";
import callIcon from "../../../images/footerImages/telephone.png";

const FooterLeftPhone = () => {
  return (
    <>
      <PhoneWrapper>
        <CallCenter>고객센터</CallCenter>
        <PhoneNumber>
          <PhoneImg src={callIcon} />
          <span>1600-0099</span>
        </PhoneNumber>
      </PhoneWrapper>
    </>
  );
};
export default FooterLeftPhone;

const PhoneWrapper = styled.div`
  display: flex;
  height: 15px;
  margin-bottom: 4px;
`;

const CallCenter = styled.p`
  padding-right: 3px;
  border-right: 1px solid grey;
  width: 45px;
  height: 14px;
  margin: auto 0;
`;

const PhoneNumber = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 0 4px;
  margin-left: 4px;
`;

const PhoneImg = styled.img`
  width: 8px;
  margin-right: 2px;
`;
