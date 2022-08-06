import Image from "next/image";
import { IconButtonProps } from "@app/button/shared";

import styles from "./IconButton.module.css";

export const IconButton = ({ onClick, icon, alt }: IconButtonProps) => {
    return (
        <button onClick={onClick} className={styles.iconButton}>
            {icon && <Image src={icon} alt={alt} />}
        </button>
    );
};
