import React from 'react';
import tw from 'twin.macro';

const footerStyle = tw`
  h-20  
  bg-green-100
`;

const Footer: React.FC = () => {
  return <footer css={footerStyle}></footer>;
};

export default Footer;
