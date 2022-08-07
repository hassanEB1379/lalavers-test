import Image from "next/image";
import { Button } from "@app/button";
import { useAuth, useLogout, AuthContextValues } from "@app/authentication";
import { logo } from "@app/assets";

import styles from "./Header.module.css";

export const Header = () => {
    const logout = useLogout();
    const { isAuthenticated, user } = useAuth() as AuthContextValues;

    return (
        <header className={styles.container}>
            <Image alt="logo" src={logo} />

            {isAuthenticated ? (
                <h2>
                    Welcome {user?.name},{" "}
                    <span className={styles.logout} onClick={logout}>
                        Log out
                    </span>
                </h2>
            ) : (
                <Button link="/sign-in" type="button">
                    Sign in
                </Button>
            )}
        </header>
    );
};
