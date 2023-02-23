import styled from "styled-components";

const LoginBtn = () => {
  return (
    <>
      <LoginBtnWrapper>
        <LoginBtnBtn type="submit">로그인</LoginBtnBtn>
      </LoginBtnWrapper>
    </>
  );
};
export default LoginBtn;

const LoginBtnWrapper = styled.div`
  position: relative;
  margin-bottom: 0.8rem;
`;

const LoginBtnBtn = styled.button`
  height: 35px;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  background-color: #8fffa9;
  border-style: none;
  cursor: pointer;
`;
