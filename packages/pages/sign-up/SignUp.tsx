import { SignUpForm } from "@app/sign-up/sign-up-form/SignUpForm";

import styles from "./SignUp.module.css";

export const SignUpPage = () => {
    return (
        <div className={styles.container}>
            <SignUpForm />
        </div>
    );
};
