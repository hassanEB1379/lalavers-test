import Link from "next/link";
import { ButtonProps } from "@app/button/shared";

import styles from "./Button.module.css";

export const Button = ({ children, onClick, type, link }: ButtonProps) => {
    const button = (
        <button type={type} onClick={onClick} className={styles.button}>
            {children}
        </button>
    );

    if (link) {
        return <Link href={link}>{button}</Link>;
    }

    return button;
};
