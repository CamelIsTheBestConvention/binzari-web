import styled from "styled-components";

const LoginEmail = () => {
  return (
    <>
      <LoginEmailWrapper>
        <LoginEmailInput
          type="text"
          placeholder="example@email.com"
        ></LoginEmailInput>
      </LoginEmailWrapper>
    </>
  );
};
export default LoginEmail;

const LoginEmailWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #a0a0a0;
  margin-bottom: 2rem;
`;

const LoginEmailInput = styled.input`
  outline: none;
  border: none;
  width: 93%;
  padding: 10px;
`;
