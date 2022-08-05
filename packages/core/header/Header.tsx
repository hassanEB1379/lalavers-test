import Image from "next/image";
import { Button } from "@app/button";
import { logo } from "@app/header/assets";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <nav className={styles.container}>
            <div>
                <Image alt="logo" src={logo} />
            </div>

            <Button>Sign in</Button>
        </nav>
    );
};
