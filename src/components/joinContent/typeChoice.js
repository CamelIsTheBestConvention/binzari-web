import styled, { css } from "styled-components";
import Check from "../../images/joinImages/check.png";
import React, { useState } from "react";

const TypeChoice = ({ handleTypeChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlerClickRadioBtn = (e) => {
    const value = e.target.value;
    console.log(value);
    handleTypeChange(value);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <TypeChoiceWrapper>
        <TypeWrapper
          id="CheckedNormal"
          isChecked={isChecked === "normal"}
          onClick={() => setIsChecked("normal")}
        >
          <Input
            id="normal"
            type="radio"
            name="id-type-radio"
            value="일반"
            onChange={handlerClickRadioBtn}
          />
          <Label for="normal">일반</Label>
          <CheckImg
            src={Check}
            id="normalImg"
            isChecked={isChecked === "normal"}
          />
        </TypeWrapper>
        <TypeWrapper
          id="CheckedMaster"
          isChecked={isChecked === "master"}
          onClick={() => setIsChecked("master")}
        >
          <Input
            id="master"
            type="radio"
            name="id-type-radio"
            value="사업자"
            onChange={handlerClickRadioBtn}
          />
          <Label for="master">사업자</Label>
          <CheckImg
            src={Check}
            id="masterImg"
            isChecked={isChecked === "master"}
          />
        </TypeWrapper>
        <TypeWrapper
          id="CheckedLaw"
          isChecked={isChecked === "law"}
          onClick={() => setIsChecked("law")}
        >
          <Input
            id="law"
            type="radio"
            name="id-type-radio"
            value="법인"
            onChange={handlerClickRadioBtn}
          />
          <Label for="law">법인</Label>
          <CheckImg src={Check} id="lawImg" isChecked={isChecked === "law"} />
        </TypeWrapper>
      </TypeChoiceWrapper>
    </>
  );
};
export default TypeChoice;

const TypeChoiceWrapper = styled.article`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
`;

const TypeWrapper = styled.article`
  width: 30%;
  padding-bottom: 3px;
  margin-right: 5%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 2px solid white;

  :hover {
    border-bottom: 2px solid #5ec48d;
    color: #5ec48d;
  }

  ${(props) =>
    props.isChecked &&
    css`
      border-bottom: 2px solid #5ec48d;
      color: #5ec48d;
    `}
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
`;

const CheckImg = styled.img`
  width: 15px;
  height: 15px;
  visibility: hidden;

  ${(props) =>
    props.isChecked &&
    css`
      visibility: visible;
    `}
`;
