import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, div, span, h1, h2, 
    h3, h4, h5, h6, p, img, ol, ul, 
    li, form, label, aside, footer, 
    header, nav, button {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 62.5%;
    }

    ol, ul {
        list-style: none;
    }
`
export default Reset