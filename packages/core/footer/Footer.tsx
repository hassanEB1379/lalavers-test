import Image from "next/image";
import { BusinessMenu, NavigationMenu } from "@app/navigation";
import { ContactInfo } from "@app/footer/contact-info/ContactInfo";
import { logo } from "@app/assets";

import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentContainer}>
                    <Image alt="logo" src={logo} />
                    <NavigationMenu />
                    <BusinessMenu />
                    <ContactInfo />
                </div>
            </div>
            <p className={styles.license}>All rights reserved © Lalaverse</p>
        </footer>
    );
};
