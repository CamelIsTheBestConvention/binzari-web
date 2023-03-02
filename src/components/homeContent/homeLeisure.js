import styled from "styled-components";
import LeisureContent from "./leisureContent";
import LeisureTitle from "./leisureTitle";

const HomeLeisure = () => {
  return (
    <>
      <HomeLeisureWrapper>
        <LeisureTitle />
        <LeisureContent />
      </HomeLeisureWrapper>
    </>
  );
};
export default HomeLeisure;

const HomeLeisureWrapper = styled.section`
  margin: 80px auto 40px auto;
  max-width: 600px;
`;
