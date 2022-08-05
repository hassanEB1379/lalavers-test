import Image from "next/image";
import { BusinessMenu, NavigationMenu } from "@app/navigation";
import { logo } from "@app/assets";

import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.main}>
                <Image alt="logo" src={logo} />
                <NavigationMenu />
                <BusinessMenu />
            </div>
            <p className={styles.license}>All rights reserved © Lalaverse</p>
        </footer>
    );
};
