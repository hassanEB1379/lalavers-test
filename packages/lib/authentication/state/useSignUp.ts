import { useMutation } from "@tanstack/react-query";
import { SignUpFormFields } from "@app/types";
import { signUp as signUpApi } from "@app/authentication/data";
import { SignUpApiBody } from "../types";

export function useSignUp() {
    const { mutate, ...states } = useMutation(signUpApi);

    function signup(data: SignUpFormFields) {
        const body: SignUpApiBody = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            phoneNumber: {
                number: data.phone,
                countryCode: data.countryCode,
            },
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
        signup,
    };
}
