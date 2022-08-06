import styles from "./Button.module.css";
import { ButtonProps } from "@app/button/shared";

export const Button = ({ children, onClick, type }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};
