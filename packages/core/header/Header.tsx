import Image from "next/image";
import { Button } from "@app/button";
import { logo } from "@app/header/assets";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.container}>
            <Image alt="logo" src={logo} />

            <Button>Sign in</Button>
        </header>
    );
};
