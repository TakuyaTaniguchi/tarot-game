import React, { ReactNode } from 'react';
import styles from './header.module.css';
import { Link } from '@remix-run/react';

type HeaderProps = {
  children?: ReactNode;
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({ children, title = "Mystic Tarot" }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>{title}</h1>
      {children ? children : (
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>ホーム</Link>
          <Link to="/reading" className={styles.navLink}>リーディング</Link>
          <Link to="/cards" className={styles.navLink}>カード一覧</Link>
          <Link to="/about" className={styles.navLink}>タロットについて</Link>
        </nav>
      )}
    </header>
  );
};