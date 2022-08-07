import { SignUpFormFields } from "@app/types";
import { signUp as signUpApi } from "@app/authentication/data";
import { SignUpApiBody, useAuthorize } from "@app/authentication/shared";

export function useSignUp() {
    const authorize = useAuthorize();

    return function signup(data: SignUpFormFields) {
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

        authorize(() => signUpApi(body));
    };
}
