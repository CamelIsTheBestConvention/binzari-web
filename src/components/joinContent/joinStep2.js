import styled from "styled-components";

const JoinStep2 = () => {
  return (
    <>
      <StepWrapper>
        <StepOne></StepOne>
        <StepTwo>STEP 2. &nbsp;&nbsp;&nbsp;계정 만들기</StepTwo>
      </StepWrapper>
    </>
  );
};
export default JoinStep2;

const StepWrapper = styled.section`
  width: 100%;
  font-size: 0.72rem;
  font-weight: bold;
  display: flex;
  margin: 20px 0;
`;

const StepOne = styled.article`
  width: 50%;
  border-bottom: 1px solid #a0a0a0;
`;

const StepTwo = styled.article`
  width: 50%;
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #8fffa9;
`;
