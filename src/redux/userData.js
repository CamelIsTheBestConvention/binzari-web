// userData.js
// 액션 타입을 정의한다.
const MODIFY_USERDATA = "userData/MODIFY_USERDATA";
const INIT_USERDATA = "userData/INIT_USERDATA";

// 액션 생성함수를 만든다.
export const modifyUserData = (data) => ({ data: data, type: MODIFY_USERDATA });
export const initUserData = () => ({ type: INIT_USERDATA });

// 초기값 제작
const initialState = {
  name: "문미새",
  phone: "01012341234",
  type: "normal",
  email: "msj1234@naver.com",
  password: "12341234",
};

/* 리듀서 선언 */
export default function userData(state = initialState, action) {
  switch (action.type) {
    case MODIFY_USERDATA:
      return { ...action.data };
    case INIT_USERDATA:
      return initialState;
    default:
      return state;
  }
}
