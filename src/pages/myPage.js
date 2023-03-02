import styled from "styled-components";
import MyProfile from "../components/myPageContent/myProfile";
import MyProfileDetail from "../components/myPageContent/myProfileDetail";

const MyPage = () => {
  return (
    <>
      <MyPageMain>
        <MyPageWrapper>
          <MyProfile />
          <MyProfileDetail />
        </MyPageWrapper>
      </MyPageMain>
    </>
  );
};
export default MyPage;

const MyPageMain = styled.main`
  width: 80%;
  min-height: 700px;
  max-width: 500px;
  margin: 0 auto;
`;

const MyPageWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;
