import styled from "styled-components";
import OpenEye from "../../images/loginImages/view.png";
import CloseEye from "../../images/loginImages/hide.png";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [ShowPw, setShowPw] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const ToggleShowPw = () => {
    setShowPw(!ShowPw);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        email,
        password,
      });
      console.log(response.data); // 로그인 성공 시 서버에서 반환한 데이터
      const token = response.data.token; // 서버에서 반환된 토큰
      const name = response.data.name; // 서버에서 반환된 이름
      sessionStorage.setItem("token", token); // 토큰을 세션 스토리지에 저장
      sessionStorage.setItem("name", name); // 이름을 세션 스토리지에 저장

      alert(`어서오세요, ${name}님`);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("로그인에 실패했습니다.");
      alert(`이메일이나 비밀번호가 맞지 않습니다.`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LoginWrapper>
          <LoginEmailInput
            type="text"
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></LoginEmailInput>
        </LoginWrapper>

        <LoginWrapper>
          <LoginPwInput
            type={ShowPw ? "text" : "password"}
            placeholder="Password#16000099"
            minLength="8"
            maxLength="16"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
