import React, { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode | string;
}

export const Button = ({ children, onClick }: Props) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};
