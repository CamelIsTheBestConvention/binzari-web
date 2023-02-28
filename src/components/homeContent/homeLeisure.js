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
  margin: 120px auto 0 auto;
  max-width: 800px;
`;
