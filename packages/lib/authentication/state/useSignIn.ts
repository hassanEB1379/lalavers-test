import { signIn as signInApi } from "@app/authentication/data";
import { SignInFormFields } from "@app/types";
import { SignInApiBody } from "@app/authentication";
import { useAuthorize } from "@app/authentication/shared";

export function useSignIn() {
    const authorize = useAuthorize();

    return function signin(data: SignInFormFields) {
        const body: SignInApiBody = {
            id: data.email,
            password: data.password,
            captchaCode: "hhhhhhhh",
        };

        authorize(() => signInApi(body));
    };
}
