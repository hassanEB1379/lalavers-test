import { ReactNode } from "react";
import { Sidebar } from "@app/sidebar";
import { Header } from "@app/header";
import { Footer } from "@app/footer";

import styles from "./MainLayout.module.css";

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <Header />
            <Sidebar />
            <main className={styles.main}>
                <div className={styles.pageContent}>{children}</div>
                <Footer />
            </main>
        </div>
    );
};
