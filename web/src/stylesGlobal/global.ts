import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  body {
    background: ${props => props.theme.colors.background};
  }
`;