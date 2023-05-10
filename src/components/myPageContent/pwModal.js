import styled from "styled-components";
import { useState } from "react";

function PwModal({ setModalOpen }) {
  const myCurrentData = JSON.parse(window.localStorage.getItem("JoinUsers"));
  //   const UserPw = myCurrentData[4];

  const [currentPw, setCurrentPw] = useState(myCurrentData);

  const closeModal = () => {
    setModalOpen(false);
    console.log(myCurrentData);
  };

  return (
    <PwModalWrapper>
      <ModalBtn onClick={closeModal}>X</ModalBtn>
      <PwInputWrapper>
        <PwInputTitle>현재 비밀번호 입력</PwInputTitle>
        <PwCurrentInput type="text" placeholder="현재 비밀번호 입력" />
        <PwInputTitle>새 비밀번호 입력</PwInputTitle>
        <PwChangeInput type="text" placeholder="새 비밀번호 입력" />
        <PwChangeBtn type="button">변경하기</PwChangeBtn>
      </PwInputWrapper>
    </PwModalWrapper>
  );
}
export default PwModal;

const PwModalWrapper = styled.div`
  width: 90%;
  height: 24%;
  z-index: 999;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  opacity: 1;
  border: 1px solid black;
  border-radius: 8px;
  min-height: 14rem;
  max-width: 420px;
`;

const ModalBtn = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const PwInputWrapper = styled.div`
  padding: 1.5rem;
`;

const PwInputTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const PwCurrentInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  padding-bottom: 0.3rem;
  font-size: 0.9rem;
`;

const PwChangeInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  padding-bottom: 0.3rem;
  font-size: 0.9rem;
`;

const PwChangeBtn = styled.button`
  width: 100%;
  padding: 0.6rem 0;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;

  :hover {
    background-color: #8fffa9;
    cursor: pointer;
  }
`;
