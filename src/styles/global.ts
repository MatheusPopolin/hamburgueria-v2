import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    }

    body{
        background-color: var(--color-grey-0);
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    img {
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    input{
        border: none;
    }

    a{
        text-decoration: none;
        text-align: center;
    }

    :root {
    /* Primary Palette */
    --color-primary:   #27AE60;
    --color-secondary: #EB5757;

    /* Grey Scale Palette */
    --color-grey-600: #333333;
    --color-grey-300: #828282;
    --color-grey-100: #E0E0E0;
    --color-grey-50:  #F5F5F5;
    --color-grey-0:   #FFFFFF;
    --color-grey-opacity: rgba(51, 51, 51, 0.5);
    
    /* Feedback Palette */
    --color-negative:    #E60000;
    --color-warning:     #FFCD07;
    --color-sucess:      #168821;
    --color-information: #155BCB;

    --radius-1: 8px;
    --radius-2: 5px;

    /* Toast Palette */
    --toastify-color-light:   #F5F5F5;  
    --toastify-color-error:   #E60000;   
    --toastify-color-warning: #FFCD07;  
    --toastify-color-success: #168821;  
    --toastify-color-info:    #155BCB;   
    }    
`;
