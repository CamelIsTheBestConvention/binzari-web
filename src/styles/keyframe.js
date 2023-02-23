import { keyframes } from "styled-components";

export const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: translateY(-30px);
    }
`;
