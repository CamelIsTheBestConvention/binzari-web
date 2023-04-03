import styled from "styled-components";
import HomeDirection from "./homeDirection";
import HomeSearch from "./homeSearch";

const HomeHeader = () => {
  return (
    <>
      <HomeHeaderWrapper>
        <HomeSearch />
        <HomeDirection />
      </HomeHeaderWrapper>
    </>
  );
};
export default HomeHeader;

const HomeHeaderWrapper = styled.section`
  width: 100%;
  position: fixed;
  top: 8%;
  left: 0;
  background-color: #fff;
`;
