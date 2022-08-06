import styles from "./Button.module.css";
import { ButtonProps } from "@app/button/shared";

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};
