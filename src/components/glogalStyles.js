import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        background-color: #FB6B6B;
        font-family: 'Recursive', Arial, Helvetica, sans-serif;
    }

    .green{
        background-color: #2FBE34;
    }

    .orange{
        background-color: #FF922E;
    }

    .red{
        background-color: #FF3030;
    }
`;
export default GlobalStyle;
