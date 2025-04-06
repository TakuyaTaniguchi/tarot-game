import React, { ReactNode } from 'react';
import styles from './footer.module.css';
import { Link } from '@remix-run/react';

type FooterProps = {
  children?: ReactNode;
};

export const Footer: React.FC<FooterProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      {children ? (
        children
      ) : (
        <>
          <div className={styles.content}>
            <div className={styles.brand}>
              <h2 className={styles.brandName}>Mystic Tarot</h2>
              <p className={styles.brandDescription}>
                古代の叡智を現代に伝えるタロットカード占いで、
                あなたの人生の道筋を照らし、
                内なる声に耳を傾けましょう。
              </p>
            </div>
            
            <div className={styles.navigation}>
              <h3 className={styles.navigationTitle}>ナビゲーション</h3>
              <ul className={styles.navigationList}>
                <li className={styles.navigationItem}>
                  <Link to="/" className={styles.navigationLink}>ホーム</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/reading" className={styles.navigationLink}>リーディング</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/cards" className={styles.navigationLink}>カード一覧</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/about" className={styles.navigationLink}>タロットについて</Link>
                </li>
              </ul>
            </div>
            
            <div className={styles.social}>
              <h3 className={styles.socialTitle}>フォローする</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.copyright}>
            &copy; {currentYear} Mystic Tarot. All rights reserved.
          </div>
        </>
      )}
    </footer>
  );
};