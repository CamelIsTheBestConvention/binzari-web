import styled from "styled-components";
import LoginFind from "../components/loginContent/loginFind";
import LoginForm from "../components/loginContent/loginForm";
import LoginGoogle from "../components/loginContent/loginGoogle";
import LoginIf from "../components/loginContent/loginIf";
import LoginJoin from "../components/loginContent/loginJoin";
import LoginNaver from "../components/loginContent/loginNaver";
import LoginTitle from "../components/loginContent/loginTitle";

const Login = () => {
  return (
    <>
      <LoginMain>
        <LoginWrapper>
          <LoginTitle />
          <LoginForm />
          <LoginNaver />
          <LoginGoogle />
          <LoginFind />
          <LoginIf />
          <LoginJoin />
        </LoginWrapper>
      </LoginMain>
    </>
  );
};
export default Login;

const LoginMain = styled.main`
  width: 80%;
  min-height: 700px;
  max-width: 500px;
  margin: 0 auto;
`;

const LoginWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;
