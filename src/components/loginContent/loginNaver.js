import styled from "styled-components";
import NaverLogo from "../../images/loginImages/naverBtn.png";

const LoginNaver = () => {
  return (
    <>
      <LoginNaverWrapper>
        <LoginNaverBtn type="button">
          <NaverImg src={NaverLogo} />
          네이버 로그인
        </LoginNaverBtn>
      </LoginNaverWrapper>
    </>
  );
};
export default LoginNaver;

const LoginNaverWrapper = styled.div`
  position: relative;
  margin-bottom: 0.8rem;
`;

const LoginNaverBtn = styled.button`
  height: 35px;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  background-color: #03c75b;
  border-style: none;
  color: white;
  cursor: pointer;
`;

const NaverImg = styled.img`
  position: absolute;
  top: 2px;
  left: 0px;
`;
