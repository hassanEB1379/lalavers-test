import { useForm } from "react-hook-form";
import { SignUpFormFields } from "@app/types";
import { Button } from "@app/button";
import { useSignUp } from "@app/authentication";

import styles from "./SignUpForm.module.css";

export const SignUpForm = () => {
    const { register, handleSubmit } = useForm<SignUpFormFields>();

    const { signup, isError, isLoading } = useSignUp();

    const onSubmit = handleSubmit(signup);

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h1 className={styles.title}>Sign UP</h1>

            <div className={styles.inputs}>
                <input
                    {...register("firstName", { required: true })}
                    placeholder="First name"
                    type="text"
                />
                <input
                    {...register("lastName", { required: true })}
                    placeholder="Last name"
                    type="text"
                />
                <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    type="email"
                />
                <input
                    {...register("phone", { required: true })}
                    placeholder="Phone"
                    type="number"
                />
                <input
                    {...register("countryCode", { required: true })}
                    placeholder="Country Code"
                    type="text"
                />
                <input
                    {...register("password", { required: true })}
                    placeholder="Password"
                    type="password"
                />

                <Button type="submit">
                    {isLoading ? "Loading" : isError ? "Retry" : "Submit"}
                </Button>
            </div>
        </form>
    );
};
