import styled from "styled-components";
import OpenEye from "../../images/loginImages/view.png";
import CloseEye from "../../images/loginImages/hide.png";
import React, { useState } from "react";

const LoginForm = () => {
  const [ShowPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ToggleShowPw = () => {
    setShowPw(!ShowPw);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LoginWrapper>
          <LoginEmailInput
            type="text"
            placeholder="example@email.com"
            value={email}
            onChange={handleChangeEmail}
          ></LoginEmailInput>
        </LoginWrapper>

        <LoginWrapper>
          <LoginPwInput
            type={ShowPw ? "text" : "password"}
            placeholder="Password#16000099"
            minLength="8"
            maxLength="16"
            value={password}
            onChange={handleChangePassword}
          />
          {ShowPw ? (
            <PwChangeImg src={CloseEye} onClick={ToggleShowPw} />
          ) : (
            <PwChangeImg src={OpenEye} onClick={ToggleShowPw} />
          )}
        </LoginWrapper>

        <LoginBtnWrapper>
          <LoginBtnBtn type="submit">로그인</LoginBtnBtn>
        </LoginBtnWrapper>
      </form>
    </>
  );
};
export default LoginForm;

const LoginWrapper = styled.div`
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

const LoginPwInput = styled.input`
  outline: none;
  border: none;
  width: 93%;
  padding: 10px;
`;

const PwChangeImg = styled.img`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;

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
