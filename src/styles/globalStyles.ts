import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary-color: #401F18;

        --color-bronze: #791E37;
        --color-error: #CA3131;

        --color-white: #fff;
        --color-white2: #CCC9C9;
        --color-black: #3D2E32;
        --color-black2:#654F54;

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
        box-sizing: border-box;
       
        
    }
    #root{
        height: 100vh;
       
    }
   
    button{
        cursor: pointer;
    }

`;
