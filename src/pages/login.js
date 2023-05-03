import styled from "styled-components";
import LoginFind from "../components/loginContent/loginFind";
import LoginForm from "../components/loginContent/loginForm";
import LoginGoogle from "../components/loginContent/loginGoogle";
import LoginIf from "../components/loginContent/loginIf";
import LoginJoin from "../components/loginContent/loginJoin";
import LoginNaver from "../components/loginContent/loginNaver";
import LoginTitle from "../components/loginContent/loginTitle";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";

const Login = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};
export default Login;

const LoginMain = styled.main`
  width: 90%;
  min-height: 600px;
  max-width: 500px;
  margin: 0 auto;
`;

const LoginWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;
