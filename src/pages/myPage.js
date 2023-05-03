import styled from "styled-components";
import MyProfile from "../components/myPageContent/myProfile";
import MyProfileDetail from "../components/myPageContent/myProfileDetail";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/footer";

const MyPage = () => {
  return (
    <>
      <Header />
      <MyPageMain>
        <MyPageWrapper>
          <MyProfile />
          <MyProfileDetail />
        </MyPageWrapper>
      </MyPageMain>
      <Footer />
    </>
  );
};
export default MyPage;

const MyPageMain = styled.main`
  width: 90%;
  min-height: 600px;
  max-width: 500px;
  margin: 0 auto;
`;

const MyPageWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;
