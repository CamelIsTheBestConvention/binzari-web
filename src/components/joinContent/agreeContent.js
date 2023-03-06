import styled from "styled-components";
import AgreeImg from "../../images/joinImages/agree.png";
import AgreeCorrectImg from "../../images/joinImages/correctAgree.png";
import RightArrow from "../../images/joinImages/rightArrow.png";
import React, { useState } from "react";

const AgreeContent = () => {
  const [AllCheck, setAllCheck] = useState(false);
  const [MustAllCheck, setMustAllCheck] = useState(false);
  const [MustCheck1, setMustCheck1] = useState(false);
  const [MustCheck2, setMustCheck2] = useState(false);
  const [ChoiceAllCheck, setChoiceAllCheck] = useState(false);
  const [ChoiceCheck1, setChoiceCheck1] = useState(false);

  function handleAllChecked(event) {
    setAllCheck(event.target.checked);
    setMustAllCheck(event.target.checked);
    setMustCheck1(event.target.checked);
    setMustCheck2(event.target.checked);
    setChoiceAllCheck(event.target.checked);
    setChoiceCheck1(event.target.checked);
  }

  function handleMustAllChecked(event) {
    setMustAllCheck(event.target.checked);
    setMustCheck1(event.target.checked);
    setMustCheck2(event.target.checked);
    setAllCheck(ChoiceAllCheck && event.target.checked);
  }

  function handleMustChecked1(event) {
    setMustCheck1(event.target.checked);
    setMustAllCheck(MustCheck2 && event.target.checked);
    if (!MustAllCheck && ChoiceAllCheck && MustCheck2) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }

  function handleMustChecked2(event) {
    setMustCheck2(event.target.checked);
    setMustAllCheck(MustCheck1 && event.target.checked);
    if (!MustAllCheck && ChoiceAllCheck && MustCheck1) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }

  function handleChoiceAllChecked(event) {
    setChoiceAllCheck(event.target.checked);
    setChoiceCheck1(event.target.checked);
    setAllCheck(MustAllCheck && event.target.checked);
  }

  function handleChoiceChecked1(event) {
    setChoiceCheck1(event.target.checked);
    setChoiceAllCheck(event.target.checked);
    if (!ChoiceAllCheck && MustAllCheck) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }

  return (
    <>
      <AgreeTotal>
        <label for="allCheck">
          <CheckInput
            type="checkbox"
            id="allCheck"
            checked={AllCheck}
            onChange={handleAllChecked}
          />
          <AgreeTotalImg src={!AllCheck ? AgreeImg : AgreeCorrectImg} />
          <Span>이용약관 전체동의</Span>
        </label>
      </AgreeTotal>

      <AgreeUnder>
        <AgreeUnderTotal>
          <label for="mustAllCheck">
            <CheckInput
              type="checkbox"
              id="mustAllCheck"
              checked={MustAllCheck}
              onChange={handleMustAllChecked}
            />
            <AgreeUnderTotalImg
              src={!MustAllCheck ? AgreeImg : AgreeCorrectImg}
            />
            <Span>필수 이용약관 전체동의</Span>
          </label>
        </AgreeUnderTotal>

        <AgreeUnderContent>
          <AgreeUnderContentCheck>
            <label for="mustCheck1">
              <CheckInput
                type="checkbox"
                id="mustCheck1"
                checked={MustCheck1}
                onChange={handleMustChecked1}
              />
              <AgreeUnderContentCheckImg
                src={!MustCheck1 ? AgreeImg : AgreeCorrectImg}
              />
              <Span>서비스 이용약관 동의</Span>
            </label>
          </AgreeUnderContentCheck>
          <AgreeUnderContentDetail>
            <Span>상세보기</Span>
            <AgreeUnderContentDetailImg src={RightArrow} />
          </AgreeUnderContentDetail>
        </AgreeUnderContent>

        <AgreeUnderContent style={{ marginBottom: "15px" }}>
          <AgreeUnderContentCheck>
            <label for="mustCheck2">
              <CheckInput
                type="checkbox"
                id="mustCheck2"
                checked={MustCheck2}
                onChange={handleMustChecked2}
              />
              <AgreeUnderContentCheckImg
                src={!MustCheck2 ? AgreeImg : AgreeCorrectImg}
              />
              <Span>개인정보 처리 방침 동의</Span>
            </label>
          </AgreeUnderContentCheck>
          <AgreeUnderContentDetail>
            <Span>상세보기</Span>
            <AgreeUnderContentDetailImg src={RightArrow} />
          </AgreeUnderContentDetail>
        </AgreeUnderContent>

        <AgreeUnderTotal>
          <label for="choiceAllCheck">
            <CheckInput
              type="checkbox"
              id="choiceAllCheck"
              checked={ChoiceAllCheck}
              onChange={handleChoiceAllChecked}
            />
            <AgreeUnderTotalImg
              src={!ChoiceAllCheck ? AgreeImg : AgreeCorrectImg}
            />
            <Span>선택 이용약관 전체동의</Span>
          </label>
        </AgreeUnderTotal>

        <AgreeUnderContent>
          <AgreeUnderContentCheck>
            <label for="choiceCheck1">
              <CheckInput
                type="checkbox"
                id="choiceCheck1"
                checked={ChoiceCheck1}
                onChange={handleChoiceChecked1}
              />
              <AgreeUnderContentCheckImg
                src={!ChoiceCheck1 ? AgreeImg : AgreeCorrectImg}
              />
              <Span>알림 동의</Span>
            </label>
          </AgreeUnderContentCheck>
          <AgreeUnderContentDetail>
            <Span>상세보기</Span>
            <AgreeUnderContentDetailImg src={RightArrow} />
          </AgreeUnderContentDetail>
        </AgreeUnderContent>
      </AgreeUnder>
    </>
  );
};
export default AgreeContent;

// 전체동의
const AgreeTotal = styled.article`
  border-bottom: 1px solid #a0a0a0;
  font-size: 0.8rem;
  padding-bottom: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const AgreeTotalImg = styled.img`
  width: 18px;
  margin-bottom: -4px;
  margin-right: 5px;
  cursor: pointer;
`;

// 하단 약관 동의
const AgreeUnder = styled.article`
  margin-left: 3px;
  cursor: pointer;
`;

// 하단 약관 전체 동의
const AgreeUnderTotal = styled.article`
  font-size: 0.77rem;
  cursor: pointer;
`;

const AgreeUnderTotalImg = styled.img`
  width: 16px;
  margin-bottom: -3px;
  margin-right: 5px;
  cursor: pointer;
`;

// 하단 약관 세부 동의
const AgreeUnderContent = styled.article`
  display: flex;
  justify-content: space-between;
  margin-left: 2px;
  margin-top: 5px;
  cursor: pointer;
`;

const AgreeUnderContentCheck = styled.article`
  font-size: 0.7rem;
`;

const AgreeUnderContentCheckImg = styled.img`
  width: 14px;
  margin-bottom: -2px;
  margin-right: 5px;
  cursor: pointer;
`;

const AgreeUnderContentDetail = styled.article`
  font-size: 0.6rem;
`;

const AgreeUnderContentDetailImg = styled.img`
  width: 8px;
  margin-left: 5px;
`;

const CheckInput = styled.input`
  display: none;
`;

const Span = styled.span`
  cursor: pointer;
`;
