import styled from "styled-components";
import Eye from "../../images/joinImages/view.png";

const PwInput = () => {
  return (
    <>
      <PwInputWrapper>
        <Input type="password" placeholder="Password#16000099" minlength="8" />
        <EyeImg src={Eye} />
      </PwInputWrapper>
    </>
  );
};
export default PwInput;

const PwInputWrapper = styled.article`
  display: flex;
  border-bottom: 1px solid #a0a0a0;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 70%;
  border: none;
  padding-bottom: 5px;
  padding-left: 5px;
`;

const EyeImg = styled.img`
  width: 20px;
  height: 15px;
  padding-right: 5px;
`;
