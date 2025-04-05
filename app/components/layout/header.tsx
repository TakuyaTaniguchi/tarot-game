import React, { ReactNode } from 'react';
import HeaderCSS from './header.module.css'
type HeaderProps = {
  children: ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={HeaderCSS.header} >
      {children}
    </header>
  );
};