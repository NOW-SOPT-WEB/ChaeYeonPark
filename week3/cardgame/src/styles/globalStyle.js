import reset from 'emotion-reset';
import {css} from '@emotion/react';

import theme from './theme';

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    box-sizing: border-box; /* default */
    margin: 0 auto;

    font-size: 62.5%;

    background-color: ${theme.colors.backGroundGray}; //theme 컬러 가져오기
  }

  input {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  button {
    font: inherit;

    background: none;
    cursor: pointer;
    border: none;
  }

  select {
    cursor: pointer;
  }

  textarea {
    outline: none;

    resize: none;
  }
`;

export default globalStyle;
