import { css } from '@emotion/react';
import normalize from 'emotion-normalize';

import base from './base';

export default css`
  ${normalize}
  ${base}

  html {
    height: 100%;
    font-size: 62.5%;
  }
  body {
    min-width: 320px;
    min-height: 100%;
    font-size: 1.6rem;
    font-family: sans-serif;
    line-height: 1.5;
  }
  input[type='radio'],
  input[type='checkbox'] {
  }

  #root {
    min-height: 100vh;
  }
`;
