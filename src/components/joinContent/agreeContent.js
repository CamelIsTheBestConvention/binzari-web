import styled from "styled-components";
import AgreeImg from "../../images/joinImages/agree.png";
import RightArrow from "../../images/joinImages/rightArrow.png";

const AgreeContent = () => {
  return (
    <>
      <AgreeTotal>
        <AgreeTotalImg src={AgreeImg} />
        <span>이용약관 전체동의</span>
      </AgreeTotal>

      <AgreeUnder>
        <AgreeUnderTotal>
          <AgreeUnderTotalImg src={AgreeImg} />
          <span>필수 이용약관 전체동의</span>
        </AgreeUnderTotal>

        <AgreeUnderContent>
          <AgreeUnderContentCheck>
            <AgreeUnderContentCheckImg src={AgreeImg} />
            <span>서비스 이용약관 동의</span>
          </AgreeUnderContentCheck>
          <AgreeUnderContentDetail>
            <span>상세보기</span>
            <AgreeUnderContentDetailImg src={RightArrow} />
          </AgreeUnderContentDetail>
        </AgreeUnderContent>

        <AgreeUnderContent style={{ marginBottom: "15px" }}>
          <AgreeUnderContentCheck>
            <AgreeUnderContentCheckImg src={AgreeImg} />
            <span>개인정보 처리 방침 동의</span>
          </AgreeUnderContentCheck>
          <AgreeUnderContentDetail>
            <span>상세보기</span>
            <AgreeUnderContentDetailImg src={RightArrow} />
          </AgreeUnderContentDetail>
        </AgreeUnderContent>

        <AgreeUnderTotal>
          <AgreeUnderTotalImg src={AgreeImg} />
          <span>선택 이용약관 전체동의</span>
        </AgreeUnderTotal>

        <AgreeUnderContent>
          <AgreeUnderContentCheck>
            <AgreeUnderContentCheckImg src={AgreeImg} />
            <span>알림 동의</span>
          </AgreeUnderContentCheck>
          <AgreeUnderContentDetail>
            <span>상세보기</span>
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
`;

// 하단 약관 전체 동의
const AgreeUnderTotal = styled.article`
  font-size: 0.77rem;
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
