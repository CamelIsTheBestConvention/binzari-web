import styled from "styled-components";
import Check from "../../images/joinImages/check.png";
import React, { useState } from "react";

const TypeChoice = () => {
  const [radioCheck, setRadioCheck] = useState("일반");

  const handlerClickRadioBtn = (e) => {
    console.log(e.target.value);
    setRadioCheck(e.target.value);
    TypeWrapper.style.setProperty();
  };

  return (
    <>
      <TypeChoiceWrapper>
        <TypeWrapper>
          <Input
            id="normal"
            type="radio"
            name="id-type-radio"
            value="일반"
            style={{ display: "none" }}
            checked={radioCheck === "일반"}
            onChange={handlerClickRadioBtn}
          />
          <Label for="normal">일반</Label>
          <img src={Check} style={{ width: "15px", height: "15px" }} />
        </TypeWrapper>
        <TypeWrapper>
          <Input
            id="master"
            type="radio"
            name="id-type-radio"
            value="사업자"
            style={{ display: "none" }}
            checked={radioCheck === "사업자"}
            onChange={handlerClickRadioBtn}
          />
          <Label for="master">사업자</Label>
        </TypeWrapper>
        <TypeWrapper>
          <Input
            id="law"
            type="radio"
            name="id-type-radio"
            value="법인"
            style={{ display: "none" }}
            checked={radioCheck === "법인"}
            onChange={handlerClickRadioBtn}
          />
          <Label for="law" style={{ cursor: "pointer" }}>
            법인
          </Label>
        </TypeWrapper>
      </TypeChoiceWrapper>
    </>
  );
  console.log(Input.value);
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
  border-bottom: 2px solid #5ec48d;
  color: #5ec48d;

  :hover {
    border-bottom: 2px solid #5ec48d;
    color: #5ec48d;
  }

  /* 호버 넣어야대고 체크된거 js로 뺴야함 */
`;

const Input = styled.input`
  :checked {
    border-bottom: 2px solid #5ec48d;
    color: #5ec48d;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;
