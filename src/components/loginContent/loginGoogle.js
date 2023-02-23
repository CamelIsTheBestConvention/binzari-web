import styled from "styled-components";
import GoogleLogo from "../../images/loginImages/googleBtn.png";

const LoginGoogle = () => {
  return (
    <>
      <LoginGoogleWrapper>
        <LoginGoogleBtn type="button">
          <GoogleImg src={GoogleLogo} />
          구글 로그인
        </LoginGoogleBtn>
      </LoginGoogleWrapper>
    </>
  );
};
export default LoginGoogle;

const LoginGoogleWrapper = styled.div`
  position: relative;
  margin-bottom: 0.8rem;
`;

const LoginGoogleBtn = styled.button`
  height: 35px;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #a0a0a0;
  background-color: white;
  cursor: pointer;
`;

const GoogleImg = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
`;
