import React, { useState } from "react";
import styled from "styled-components";
import OpenEye from "../../images/loginImages/view.png";
import CloseEye from "../../images/loginImages/hide.png";

const LoginPassword = () => {
  const [ShowPw, setShowPw] = useState(false);

  const ToggleShowPw = () => {
    setShowPw(!ShowPw);
  };

  return (
    <>
      <LoginPwWrapper>
        <LoginPwInput
          type={ShowPw ? "text" : "password"}
          placeholder="Password#16000099"
          minLength="8"
          maxLength="16"
        />
        {ShowPw ? (
          <PwChangeImg src={CloseEye} onClick={ToggleShowPw} />
        ) : (
          <PwChangeImg src={OpenEye} onClick={ToggleShowPw} />
        )}
      </LoginPwWrapper>
    </>
  );
};
export default LoginPassword;

const LoginPwWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #a0a0a0;
  margin-bottom: 2rem;
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
