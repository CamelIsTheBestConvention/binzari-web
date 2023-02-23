import styled from "styled-components";
import Eye from "../../images/joinImages/view.png";

const PwInputCheck = () => {
  return (
    <>
      <PwInputWrapper>
        <Input type="password" placeholder="Password#16000099" minlength="8" />
        <EyeImg src={Eye} />
      </PwInputWrapper>
    </>
  );
};
export default PwInputCheck;

const PwInputWrapper = styled.article`
  position: relative;
  border-bottom: 1px solid #a0a0a0;
`;

const Input = styled.input`
  width: 70%;
  outline: none;
  border: none;
  padding-bottom: 5px;
  padding-left: 5px;
`;

const EyeImg = styled.img`
  position: absolute;
  right: 20px;
  cursor: pointer;
  padding-right: 5px;
`;
