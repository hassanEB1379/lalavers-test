import { useMutation } from "@tanstack/react-query";
import { SignInFormFields } from "@app/types";
import { signIn as signInApi } from "@app/authentication/data";
import { SignInApiBody } from "@app/authentication/types";

export function useSignIn() {
    const { mutate, ...states } = useMutation(signInApi);

    function signin(data: SignInFormFields) {
        const body: SignInApiBody = {
            id: data.email,
            password: data.password,
            captchaCode: "hhhhhhhh",
        };

        mutate(body, {
            onSuccess: function (res) {
                console.log(res);
            },
            onError: function (e) {
                console.log(e);
            },
        });
    }

    return {
        ...states,
        signin,
    };
}
