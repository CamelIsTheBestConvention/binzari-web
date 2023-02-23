import LoginBtn from "./loginBtn";
import LoginEmail from "./loginEmail";
import LoginPassword from "./loginPassword";

const LoginForm = () => {
  return (
    <>
      <form action="#">
        <LoginEmail />
        <LoginPassword />
        <LoginBtn />
      </form>
    </>
  );
};
export default LoginForm;
