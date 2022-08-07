import { SignInForm } from "@app/sign-in/sign-in-form/SignInForm";
import styles from "./SignIn.module.css";

export const SignInPage = () => {
    return (
        <div className={styles.container}>
            <SignInForm />
        </div>
    );
};
