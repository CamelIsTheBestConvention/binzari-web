import styled from "styled-components";

const Alarm = () => {
  return (
    <>
      <AlarmMain>
        <AlarmWrapper></AlarmWrapper>
      </AlarmMain>
    </>
  );
};
export default Alarm;

const AlarmMain = styled.main`
  width: 80%;
  margin: 0 auto;
`;

const AlarmWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
  position: relative;
`;
