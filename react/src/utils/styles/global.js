import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '../styles';
import './fonts.css';

const StyledGlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fonts.texte};
        background-color: ${colors.blanc};

        ::-webkit-scrollbar {
            width: 0.5rem;
            background-color:transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${colors.violet};
            border-radius: 1rem;
        }
    }
`

function GlobalStyles() {
    return <StyledGlobalStyles />
}

export default GlobalStyles;
