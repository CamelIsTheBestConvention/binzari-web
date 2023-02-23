import styled from "styled-components";

const LoginFind = () => {
  return (
    <>
      <FindLoginWrapper>
        <a href="#">아이디 찾기</a>
        <a href="#">비밀번호 찾기</a>
      </FindLoginWrapper>
    </>
  );
};
export default LoginFind;

const FindLoginWrapper = styled.div`
  display: flex;
  font-size: 12px;
  color: #a0a0a0;
  margin: 1rem 0 1rem 0;
  justify-content: space-around;

  > a {
    text-decoration: none;
    color: #a0a0a0;
  }
`;
