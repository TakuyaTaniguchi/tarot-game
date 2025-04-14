import React from "react";
import styles from './card.module.css';

export type CardProps = {}

export const card:React.FC<CardProps> = () =>{
    return (
        <div className={styles.wrapper}>
            カード
        </div>
    )
}