import styles from "./Sidebar.module.css";
import { NavigationMenu } from "@app/navigation";

export const Sidebar = () => {
    return (
        <aside className={styles.container}>
            <NavigationMenu />
        </aside>
    );
};
