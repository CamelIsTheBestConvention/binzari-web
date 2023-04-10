import styled from "styled-components";
import React, { useState } from "react";

const PhoneInput = ({ handlePhoneChange }) => {
  const [randomNumber, setRandomNumber] = useState("");
  const [showNumber, setShowNumber] = useState(false);
  const [NextRight, setNextRight] = useState(false);

  const handlerSendRight = () => {
    alert("인증 완료되었습니다.");
    setNextRight(true);
  };

  const handlerSend = () => {
    alert("인증번호가 발송되었습니다.");

    const number = Math.floor(Math.random() * 1000000);
    const sixDigitNumber = String(number).padStart(6, "0");
    setRandomNumber(sixDigitNumber);
    setShowNumber(true);
  };

  const onPhoneHandle = (e) => {
    const value = e.target.value;
    handlePhoneChange(value);
  };

  return (
    <>
      <PhoneInputWrapper>
        <Input type="text" placeholder="01012345678" onChange={onPhoneHandle} />
        <SendBtn type="button" onClick={handlerSend}>
          인증번호 발송
        </SendBtn>
      </PhoneInputWrapper>
      <SendNumber style={{ display: showNumber ? "block" : "none" }}>
        {showNumber && <p>{randomNumber}</p>}
      </SendNumber>
      <SendCheckBtn
        type="button"
        style={{ display: showNumber ? "block" : "none" }}
        onClick={handlerSendRight}
      >
        인증 확인
      </SendCheckBtn>
    </>
  );
};
export default PhoneInput;

const PhoneInputWrapper = styled.article`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 65%;
  border: none;
  border-bottom: 1px solid #a0a0a0;
`;

const SendBtn = styled.button`
  height: 28px;
  width: 33%;
  font-size: 0.7rem;
  border-radius: 5px;
  border: none;
  background-color: #afafaf;
  color: white;
  font-weight: bold;
  margin-right: -26px;

  :hover {
    background-color: #5ec48d;
    cursor: pointer;
  }
`;

const SendNumber = styled.div`
  display: none;
  width: 97%;
  border: none;
  border-bottom: 1px solid #a0a0a0;
  font-size: 1rem;
  margin-top: 20px;
`;

const SendCheckBtn = styled.button`
  width: 100%;
  background-color: #afafaf;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  height: 33px;
  margin-top: 15px;
  margin-bottom: -20px;

  :hover {
    background-color: #8fffa9;
    transition: 0.5s;
    cursor: pointer;
  }
`;
