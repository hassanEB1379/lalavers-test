import { signIn as signInApi } from "@app/authentication/data";
import { SignInFormFields } from "@app/types";
import { SignInApiBody } from "@app/authentication/types";
import { useAuthDispatch } from "../AuthProvider";
import { useRouter } from "next/router";

export function useSignIn() {
    const setUser = useAuthDispatch();
    const router = useRouter();

    function signin(data: SignInFormFields) {
        const body: SignInApiBody = {
            id: data.email,
            password: data.password,
            captchaCode: "hhhhhhhh",
        };

        signInApi(body).then(res => {
            if (setUser) {
                setUser(res.data.user);
                router.push("/");
            }
        });
    }

    return {
        signin,
    };
}
