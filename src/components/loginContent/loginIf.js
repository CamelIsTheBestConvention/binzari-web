import styled from "styled-components";

const LoginIf = () => {
  return (
    <>
      <LoginIfWrapper>아직까지 회원이 아니시라면</LoginIfWrapper>
    </>
  );
};
export default LoginIf;

const LoginIfWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  font-size: 10px;
  color: #d9d9d9;

  :before {
    content: "";
    flex-grow: 1;
    margin-right: 5px;
    background: #d9d9d9;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  :after {
    content: "";
    flex-grow: 1;
    margin-left: 5px;
    background: #d9d9d9;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;
