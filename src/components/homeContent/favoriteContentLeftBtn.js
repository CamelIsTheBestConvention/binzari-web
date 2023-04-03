import styled from "styled-components";
import PrevBtn from "../../images/homeImages/leftBtn.png";

const FavoriteContentLeftBtn = () => {
  return (
    <>
      <FavoriteContentLeftBtnWrapper>
        <img src={PrevBtn} alt="이전 버튼" />
      </FavoriteContentLeftBtnWrapper>
    </>
  );
};
export default FavoriteContentLeftBtn;

const FavoriteContentLeftBtnWrapper = styled.button`
  //   width: 5%;
  background-color: #fff;
  border: none;
  font-size: 15px;
  //   margin: 10px;
  cursor: pointer;

  :hover {
    background-color: lightgray;
    opacity: 0.3;
  }
`;
