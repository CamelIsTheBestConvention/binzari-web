import styled from "styled-components";
import React, { useState } from "react";

const EmailInput = ({ handleEmailChange }) => {
  const onEmailHandle = (e) => {
    const value = e.target.value;
    handleEmailChange(value);
  };

  return (
    <>
      <EmailInputWrapper>
        <Input
          type="email"
          placeholder="example@email.com"
          onChange={onEmailHandle}
        />
        <EmailBtn>인증하기</EmailBtn>
      </EmailInputWrapper>
    </>
  );
};
export default EmailInput;

const EmailInputWrapper = styled.article`
  display: flex;

  EmailInputWrapper::placeholder {
    color: #afafaf;
  }
`;

const EmailBtn = styled.button`
  width: 25%;
  background-color: #afafaf;
  color: #fff;
  border-radius: 5px;
  font-size: 11px;
  padding: 6px 10px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #5ec48d;
    transition: 0.5s;
  }
`;

const Input = styled.input`
  width: 77%;
  border: none;
  border-bottom: 1px solid #a0a0a0;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 20px;
  padding-bottom: 3px;
`;
