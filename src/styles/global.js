import { createGlobalStyle } from "styled-components";
/* {}안에 있으면 한글자라도 틀리면 안됩니다. key값(이름)으로 가지고 오는것 */
/* {} 없으면 그냥 내 마음대로 이름 주고 가지고 와도 됩니다. */
import reset from "styled-reset";

/* 
    reset css
    npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
`;
export default GlobalStyles;
