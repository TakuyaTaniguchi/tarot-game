import React, {ReactNode} from 'react'
import styles from './footer.module.css'

type FooterProps = {
    children: ReactNode;
}


export const Footer: React.FC<FooterProps> = ({ children }) =>{
    return (
        <footer className={styles.footer}>
            {children}
        </footer>
    );
}