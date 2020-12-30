import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';

const Pstyle = css`
  font-weight: bold;
  color: black;
`;

const App: React.FC = ({ children }) => {
  return <>{children}</>;
};

export default App;
