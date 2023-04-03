import React, { useState } from "react";
import styled from "styled-components";
import JoinAgree from "../components/joinContent/joinAgree";
import JoinBtn from "../components/joinContent/joinBtn";
import JoinStep2 from "../components/joinContent/joinStep2";
import JoinTitle from "../components/joinContent/joinTitle";
import JoinStep1 from "../components/joinContent/joinStep1";
import JoinForm2 from "../components/joinContent/joinForm2";
import JoinForm1 from "../components/joinContent/joinForm1";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";

const Join = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const [NextRight, setNextRight] = useState(false);
  return (
    <>
      <Header />
      <div>
        {step === 1 && (
          <form>
            <JoinMain>
              <JoinWrapper>
                <JoinTitle />
                <JoinStep1 />
                <JoinForm1 />
                <NextJoinBtn
                  onClick={handleNext}
                  style={{ allowed: setNextRight ? "not-allowed" : "allowed" }}
                >
                  다음
                </NextJoinBtn>
              </JoinWrapper>
            </JoinMain>
          </form>
        )}
        {step === 2 && (
          <JoinMain>
            <JoinWrapper>
              <JoinTitle />
              <JoinStep2 />
              <JoinForm2 />
              <JoinAgree />
              <JoinBtn />
            </JoinWrapper>
          </JoinMain>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Join;

const JoinMain = styled.main`
  width: 80%;
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
