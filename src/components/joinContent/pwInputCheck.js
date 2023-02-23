import React, { useState } from "react";
import styled from "styled-components";
import OpenEye from "../../images/joinImages/view.png";
import CloseEye from "../../images/joinImages/hide.png";

const PwInputCheck = () => {
  const [ShowPw, setShowPw] = useState(false);

  const ToggleShowPw = () => {
    setShowPw(!ShowPw);
  };
  return (
    <>
      <PwInputWrapper>
        <Input
          type={ShowPw ? "text" : "password"}
          placeholder="Password#16000099"
          minlength="8"
          maxLength="16"
        />
        {ShowPw ? (
          <EyeImg src={CloseEye} onClick={ToggleShowPw} />
        ) : (
          <EyeImg src={OpenEye} onClick={ToggleShowPw} />
        )}
      </PwInputWrapper>
    </>
  );
};
export default PwInputCheck;

const PwInputWrapper = styled.article`
  position: relative;
  border-bottom: 1px solid #a0a0a0;
`;

const Input = styled.input`
  width: 70%;
  outline: none;
  border: none;
  padding-bottom: 5px;
  padding-left: 5px;
`;

const EyeImg = styled.img`
  position: absolute;
  right: 20px;
  cursor: pointer;
  padding-right: 5px;
`;
