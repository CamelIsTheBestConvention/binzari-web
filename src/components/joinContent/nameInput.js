import styled from "styled-components";
import React, { useState } from "react";

const NameInput = ({ handleNameChange }) => {
  const onNameHandle = (e) => {
    const value = e.target.value;
    handleNameChange(value);
  };

  return (
    <>
      <NameInputWrapper>
        <Input type="text" placeholder="성이름" onChange={onNameHandle} />
      </NameInputWrapper>
    </>
  );
};
export default NameInput;

const NameInputWrapper = styled.article`
  width: 100%;
`;

const Input = styled.input`
  width: 90%;
  border: none;
  border-bottom: 1px solid #a0a0a0;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 20px;
  padding-bottom: 3px;
`;
