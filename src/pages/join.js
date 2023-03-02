import styled from "styled-components";
import JoinAgree from "../components/joinContent/joinAgree";
import JoinBtn from "../components/joinContent/joinBtn";
import JoinForm from "../components/joinContent/joinForm";
import JoinStep from "../components/joinContent/joinStep";
import JoinTitle from "../components/joinContent/joinTitle";

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
  width: 80%;
  margin: 0 auto;
`;

const JoinWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;
