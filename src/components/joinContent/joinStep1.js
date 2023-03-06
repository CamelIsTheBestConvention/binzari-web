import styled from "styled-components";

const JoinStep1 = () => {
  return (
    <>
      <StepWrapper>
        <StepOne>STEP 1. &nbsp;&nbsp;&nbsp;본인인증</StepOne>
        <StepTwo></StepTwo>
      </StepWrapper>
    </>
  );
};
export default JoinStep1;

const StepWrapper = styled.section`
  width: 100%;
  font-size: 0.72rem;
  font-weight: bold;
  display: flex;
  margin: 20px 0;
`;

const StepOne = styled.article`
  width: 50%;
  border-bottom: 2px solid #8fffa9;
  padding-bottom: 5px;
  text-align: center;
`;

const StepTwo = styled.article`
  width: 50%;
  border-bottom: 1px solid #a0a0a0;
`;
