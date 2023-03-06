import styled from "styled-components";
import NameInput from "./nameInput";
import NameTitle from "./nameTitle";
import PhoneCountry from "./phoneCountry";
import PhoneInput from "./phoneInput";
import PhoneTitle from "./phoneTitle";

const JoinForm1 = () => {
  return (
    <>
      <form action="#">
        <NameWrapper>
          <NameTitle />
          <NameInput />
        </NameWrapper>
        <PhoneWrapper>
          <PhoneTitle />
          <PhoneCountry />
          <PhoneInput />
        </PhoneWrapper>
      </form>
    </>
  );
};
export default JoinForm1;

const NameWrapper = styled.section`
  margin-bottom: 30px;
`;

const PhoneWrapper = styled.section`
  width: 100%;
  margin-bottom: 30px;
`;
