import styled from "styled-components";
import Check from "../../images/joinImages/check.png";

const TypeChoice = () => {
  return (
    <>
      <TypeChoiceWrapper>
        <TypeNormal>
          <input
            id="normal"
            type="radio"
            name="id-type-radio"
            value="일반"
            checked="checked"
            style={{ display: "none" }}
          />
          <label for="normal">일반</label>
          <img src={Check} style={{ width: "15px", height: "15px" }} />
        </TypeNormal>
        <TypeMaster>
          <input
            id="master"
            type="radio"
            name="id-type-radio"
            value="사업자"
            style={{ display: "none" }}
          />
          <label for="master">사업자</label>
        </TypeMaster>
        <TypeLaw>
          <input
            id="law"
            type="radio"
            name="id-type-radio"
            value="법인"
            style={{ display: "none" }}
          />
          <label for="law">법인</label>
        </TypeLaw>
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

const TypeNormal = styled.article`
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

const TypeMaster = styled.article`
  width: 30%;
  margin-right: 5%;
  padding-bottom: 3px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #5ec48d;
    color: #5ec48d;
  }
`;

const TypeLaw = styled.article`
  width: 30%;
  padding-bottom: 3px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #5ec48d;
    color: #5ec48d;
  }
`;
