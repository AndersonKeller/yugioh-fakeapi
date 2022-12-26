import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary-color: #401F18;
        --color-bronze: #791E37;
        --color-white: #fff;
        --text-color: #DB950A;
        --text-color-shadow: #C28712;
    }

    *{
        margin:0;
    padding: 0;
    box-sizing: border-box;
    }
   
    ul{
        list-style: none;
    }
    body{
        
        max-width: 1100px;
        margin: 0 auto;
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        
    }
    button{
        cursor: pointer;
    }

`;
