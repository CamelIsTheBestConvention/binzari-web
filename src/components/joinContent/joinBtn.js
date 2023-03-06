import styled from "styled-components";

const JoinBtn = () => {
  return (
    <>
      <JoinSubmitBtn type="submit" value="회원가입" />
    </>
  );
};
export default JoinBtn;

const JoinSubmitBtn = styled.input`
  font-size: 0.92rem;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #afafaf;
  margin-bottom: 40px;

  :hover {
    background-color: #8fffa9;
    transition: 0.5s;
    cursor: pointer;
  }
`;
