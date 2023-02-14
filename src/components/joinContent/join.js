import styled from "styled-components";
import JoinAgree from "./joinAgree";
import JoinBtn from "./joinBtn";
import JoinForm from "./joinForm";
import JoinStep from "./joinStep";
import JoinTitle from "./joinTitle";

const Join = () => {
  return (
    <>
      <JoinMain>
        <JoinWrapper>
          <JoinTitle />
          <JoinStep />
          <JoinForm />
          <JoinAgree />
          <JoinBtn />
        </JoinWrapper>
      </JoinMain>
    </>
  );
};
export default Join;

const JoinMain = styled.main`
  width: 75%;
  margin: 0 auto;
`;

const JoinWrapper = styled.section`
  width: 100%;
  padding-top: 70px;
`;
