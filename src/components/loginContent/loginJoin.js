import styled from "styled-components";

const LoginJoin = () => {
  return (
    <>
      <LoginJoinWrapper>
        <a href="/join">
          <LoginJoinBtn>회원가입</LoginJoinBtn>
        </a>
      </LoginJoinWrapper>
    </>
  );
};
export default LoginJoin;

const LoginJoinWrapper = styled.div`
  margin-top: 1rem;
`;

const LoginJoinBtn = styled.button`
  height: 35px;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  background-color: white;
  border: 1px solid #a0a0a0;
  color: #a0a0a0;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #5ec48d;
    border: 1px solid #5ec48d;
    transition: 0.5s;
  }
`;
