import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';

const Pstyle = css`
  font-weight: bold;
  color: black;
`;

const App: React.FC = () => {
  return (
    <div>
      <p css={Pstyle}>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
