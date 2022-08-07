import { useForm } from "react-hook-form";
import { Button } from "@app/button";
import { SignInFormFields } from "@app/sign-in/shared";
import { useSignIn } from "./hook";

import styles from "./SignInForm.module.css";

export const SignInForm = () => {
    const { register, handleSubmit } = useForm<SignInFormFields>();

    const signin = useSignIn();

    const onSubmit = handleSubmit(signin);

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h1 className={styles.title}>Sign in</h1>

            <div className={styles.inputs}>
                <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    type="email"
                />
                <input
                    {...register("password", { required: true })}
                    placeholder="Password"
                    type="password"
                />

                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
};
