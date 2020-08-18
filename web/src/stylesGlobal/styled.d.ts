import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      toggle: string;
      bgForm:  string;
      background: string;
      text: string;
      inputColor: string;
      borderInput: string;
      titleForm: string;
    }
  }
}