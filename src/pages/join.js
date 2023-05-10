import React, { useState } from "react";
import styled from "styled-components";
import JoinAgree from "../components/joinContent/joinAgree";
import JoinBtn from "../components/joinContent/joinBtn";
import NameInput from "../components/joinContent/nameInput";
import PhoneInput from "../components/joinContent/phoneInput";
import PhoneCountry from "../components/joinContent/phoneCountry";
import JoinStep2 from "../components/joinContent/joinStep2";
import JoinTitle from "../components/joinContent/joinTitle";
import JoinStep1 from "../components/joinContent/joinStep1";
import EmailInput from "../components/joinContent/emailInput";
import PwInput from "../components/joinContent/pwInput";
import PwInputCheck from "../components/joinContent/pwInputCheck";
import TypeChoice from "../components/joinContent/typeChoice";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Join = () => {
  // 다음단계
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const [NextRight, setNextRight] = useState(false);

  // 에러 메세지
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // 인풋 props
  const [email, setEmail] = useState("");
  const emailChange = (value) => {
    setEmail(value);
  };

  const [password, setPassword] = useState("");
  const passwordChange = (value) => {
    setPassword(value);
  };

  const [type, setType] = useState("");
  const typeChange = (value) => {
    setType(value);
  };

  const [name, setName] = useState("");
  const nameChange = (value) => {
    setName(value);
  };

  const [phone, setPhone] = useState("");
  const phoneChange = (value) => {
    setPhone(value);
  };

  // 검사
  const onChangeNext1 = (e) => {
    const currentName = e.target.value;
    const currentPhone = e.target.value;
    setName(currentName);
    setPhone(currentPhone);
    const nameRegExp = /^[가-힣]{2,6}$/;
    const phoneRegExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

    if (!nameRegExp.test(currentName)) {
      setNameMessage("2~6글자 사이 한글만 입력 가능합니다!");
      setIsName(false);
    } else {
      setNameMessage("사용가능한 이름입니다.");
      setIsName(true);
    }

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("2~6글자 사이 한글만 입력 가능합니다!");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용가능한 이름입니다.");
      setIsPhone(true);
    }
  };

  // 에러 상태
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/join", {
        name,
        phone,
        type,
        email,
        password,
      });
      console.log(response.data);
      console.log(response.name);
      const token = response.data.token; // 서버에서 반환된 토큰
      localStorage.setItem("join", token); // 토큰을 로컬 스토리지에 저장

      alert(`회원가입이 완료되었습니다.`);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("회원가입에 실패했습니다.");
      alert(`입력상태를 확인해주세요.`);
    }
  };

  return (
    <>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <JoinMain>
              <JoinWrapper>
                <JoinTitle />
                <JoinStep1 />
                <NameWrapper>
                  <NameTitleWrapper>이름</NameTitleWrapper>
                  <NameInput handleNameChange={nameChange} />
                </NameWrapper>
                <Message> {nameMessage} </Message>
                <PhoneWrapper>
                  <PhoneTitleWrapper>휴대전화</PhoneTitleWrapper>
                  <PhoneCountry />
                  <PhoneInput handlePhoneChange={phoneChange} />
                </PhoneWrapper>
                <Message> {phoneMessage} </Message>
                <NextJoinBtn
                  onClick={handleNext}
                  style={{ allowed: setNextRight ? "not-allowed" : "allowed" }}
                  onChange={onChangeNext1}
                >
                  다음
                </NextJoinBtn>
              </JoinWrapper>
            </JoinMain>
          )}
          {step === 2 && (
            <JoinMain>
              <JoinWrapper>
                <JoinTitle />
                <JoinStep2 />
                <TypeWrapper>
                  <TypeTitleWrapper>유형</TypeTitleWrapper>
                  <TypeChoice handleTypeChange={typeChange} />
                </TypeWrapper>
                <EmailWrapper>
                  <EmailTitleWrapper>이메일</EmailTitleWrapper>
                  <EmailInput handleEmailChange={emailChange} />
                </EmailWrapper>
                <PwWrapper>
                  <PwTitleWrapper>비밀번호</PwTitleWrapper>
                  <PwInput handlePasswordChange={passwordChange} />
                </PwWrapper>
                <PwWrapper>
                  <PwCheckTitleWrapper>비밀번호 확인</PwCheckTitleWrapper>
                  <PwInputCheck />
                </PwWrapper>
                <JoinAgree />
                <JoinBtn />
              </JoinWrapper>
            </JoinMain>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Join;

const JoinMain = styled.main`
  width: 90%;
  margin: 0 auto;
`;

const JoinWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;

const NextJoinBtn = styled.button`
  width: 100%;
  background-color: #afafaf;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  height: 33px;
  margin-top: 15px;

  :hover {
    background-color: #8fffa9;
    transition: 0.5s;
    cursor: pointer;
  }
`;

// form2 css
const TypeWrapper = styled.section`
  margin-bottom: 20px;
`;

const EmailWrapper = styled.section`
  width: 100%;
  margin-bottom: 30px;
`;

const PwWrapper = styled.section`
  margin-bottom: 30px;
`;

const TypeTitleWrapper = styled.article`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const EmailTitleWrapper = styled.article`
  font-size: 0.9rem;
`;

const PwTitleWrapper = styled.article`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const PwCheckTitleWrapper = styled.article`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

// form1 css
const NameWrapper = styled.section`
  margin-bottom: 30px;
`;

const PhoneWrapper = styled.section`
  width: 100%;
  margin-bottom: 30px;
`;

const NameTitleWrapper = styled.article`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const PhoneTitleWrapper = styled.article`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 0.8rem;
`;
