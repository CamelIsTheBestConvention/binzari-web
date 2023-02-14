import styled from "styled-components";
import AgreeContent from "./agreeContent";
import AgreeTitle from "./agreeTitle";

const JoinAgree = () => {
  return (
    <>
      <AgreeWrapper>
        <AgreeTitle />
        <AgreeContent />
      </AgreeWrapper>
    </>
  );
};
export default JoinAgree;

const AgreeWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 30px;
`;
