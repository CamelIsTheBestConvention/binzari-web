import styled from "styled-components";
import StoreContent from "./storeContent";

const StoreMain = () => {
  return (
    <>
      <StoreMainWrapper>
        <StoreContent />
        <StoreContent />
        <StoreContent />
        <StoreContent />
        <StoreContent />
        <StoreContent />
      </StoreMainWrapper>
    </>
  );
};
export default StoreMain;

const StoreMainWrapper = styled.article`
  width: 100%;
`;
