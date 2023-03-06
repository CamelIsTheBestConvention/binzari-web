import styled from "styled-components";
import EmailInput from "./emailInput";
import EmailTitle from "./emailTitle";
import PwInput from "./pwInput";
import PwInputCheck from "./pwInputCheck";
import PwTitle from "./pwTitle";
import PwTitleCheck from "./pwTitleCheck";
import TypeChoice from "./typeChoice";
import TypeTitle from "./typeTitle";

const JoinForm2 = () => {
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
          <PwTitleCheck />
          <PwInputCheck />
        </PwWrapper>
      </form>
    </>
  );
};
export default JoinForm2;

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
