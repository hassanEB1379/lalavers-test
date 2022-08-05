import { navItems } from "@app/navigation/utils";
import styles from "./NavigationMenu.module.css";
import Image from "next/image";

export const NavigationMenu = () => {
    return (
        <nav>
            <ul className={styles.list}>
                {navItems.map(item => (
                    <li key={item.id} className={styles.listItem}>
                        <Image alt={item.label} src={item.icon} />
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
