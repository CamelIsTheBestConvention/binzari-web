import styled from "styled-components";
import EmailInput from "./emailInput";
import EmailTitle from "./emailTitle";
import PwInput from "./pwInput";
import PwTitle from "./pwTitle";
import TypeChoice from "./typeChoice";
import TypeTitle from "./typeTitle";

const JoinForm = () => {
  return (
    <>
      <form action="#">
        <TypeWrapper>
          <TypeTitle />
          <TypeChoice />
        </TypeWrapper>
        <EmailWrapper>
          <EmailTitle />
          <EmailInput />
        </EmailWrapper>
        <PwWrapper>
          <PwTitle />
          <PwInput />
        </PwWrapper>
        <PwWrapper>
          <PwTitle />
          <PwInput />
        </PwWrapper>
      </form>
    </>
  );
};
export default JoinForm;

const TypeWrapper = styled.section`
  margin-bottom: 20px;
`;

const EmailWrapper = styled.section`
  width: 100%;
  margin-bottom: 30px;
`;

const PwWrapper = styled.section`
  margin-bottom: 30px;
`;
