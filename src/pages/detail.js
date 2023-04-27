import Footer from "../components/common/footer/footer";
import Header from "../components/common/header/header";
import styled from "styled-components";

const Detail = () => {
  return (
    <>
      <Header />
      <DetailMain>
        <DetailWrapper>
          <이미지래퍼>
            <이미지 넣는 곳></이미지>
          </이미지래퍼>
          <가게이름래퍼>
            <가게프로필>
              <가게프로필이미지></가게프로필이미지>
            </가게프로필>
            <이름평점래퍼>
              <이름></이름>
              <평점></평점>
            </이름평점래퍼>
            <즐겨찾기 버튼></즐겨찾기>
          </가게이름래퍼>
          <상세내용래퍼></상세내용래퍼>
        </DetailWrapper>
      </DetailMain>
      <Footer />
    </>
  );
};
export default Detail;

const DetailMain = styled.main`
  width: 80%;
  min-height: 700px;
  max-width: 500px;
  margin: 0 auto;
`;

const DetailWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;
