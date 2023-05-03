import styled from "styled-components";
import LeisureComputer from "../../images/homeImages/computer.png";
import LeisureSing from "../../images/homeImages/sing.png";
import LeisureCue from "../../images/homeImages/cue.png";
import LeisureBilliards from "../../images/homeImages/billiards.png";

const LeisureContent = () => {
  return (
    <>
      <LeisureContentWrapper>
        <LeisureContentTable>
          <tbody>
            <tr>
              <LeisureContentTableTd>
                <a href="/store">
                  <LeisureContentTableTdDiv>
                    <LeisureContentTableTdDivImg
                      src={LeisureComputer}
                      alt="피시방"
                    />
                  </LeisureContentTableTdDiv>
                </a>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv>
                  <LeisureContentTableTdDivImg src={LeisureSing} alt="노래방" />
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv>
                  <LeisureContentTableTdDivImg src={LeisureCue} alt="당구장" />
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv>
                  <LeisureContentTableTdDivImg
                    src={LeisureBilliards}
                    alt="포켓볼"
                  />
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <NotService>서비스</NotService>
                  <p>제공예정</p>
                  <p>입니다</p>
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
            </tr>

            <LeisureContentTableName>
              <LeisureContentTableTd>PC방</LeisureContentTableTd>
              <LeisureContentTableTd>노래방</LeisureContentTableTd>
              <LeisureContentTableTd>당구장</LeisureContentTableTd>
              <LeisureContentTableTd>포켓볼</LeisureContentTableTd>
              <LeisureContentTableTd>볼링장</LeisureContentTableTd>
            </LeisureContentTableName>

            <tr>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <NotService>서비스</NotService>
                  <p>제공예정</p>
                  <p>입니다</p>
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <NotService>서비스</NotService>
                  <p>제공예정</p>
                  <p>입니다</p>
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <NotService>서비스</NotService>
                  <p>제공예정</p>
                  <p>입니다</p>
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <NotService>서비스</NotService>
                  <p>제공예정</p>
                  <p>입니다</p>
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
              <LeisureContentTableTd>
                <LeisureContentTableTdDiv
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <NotService>서비스</NotService>
                  <p>제공예정</p>
                  <p>입니다</p>
                </LeisureContentTableTdDiv>
              </LeisureContentTableTd>
            </tr>

            <LeisureContentTableName>
              <LeisureContentTableTd>탁구장</LeisureContentTableTd>
              <LeisureContentTableTd>보드게임</LeisureContentTableTd>
              <LeisureContentTableTd>마사지</LeisureContentTableTd>
              <LeisureContentTableTd>카페</LeisureContentTableTd>
              <LeisureContentTableTd>스터디카페</LeisureContentTableTd>
            </LeisureContentTableName>
          </tbody>
        </LeisureContentTable>
      </LeisureContentWrapper>
    </>
  );
};
export default LeisureContent;

const LeisureContentWrapper = styled.nav`
  margin: 0 10px;
`;

const LeisureContentTable = styled.table`
  width: 100%;
`;
const LeisureContentTableTd = styled.td`
  font-weight: bold;
  text-align: center;
  width: 20%;
  padding-bottom: 5px;
`;

const LeisureContentTableTdDiv = styled.div`
  border-radius: 50%;
  font-size: 10px;
  zoom: 0.8;
  width: 60px;
  height: 60px;
  margin: -5px auto 0 auto;
`;

const LeisureContentTableTdDivImg = styled.img`
  width: 40px;
  margin-top: 15px;
  margin-bottom: -29px;
`;

const NotService = styled.p`
  margin-top: 10px;
  padding-top: 15px;
`;

const LeisureContentTableName = styled.tr`
  font-size: 12px;
`;
