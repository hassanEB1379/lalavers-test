import { SignUpFormFields } from "@app/types";
import { signUp as signUpApi } from "@app/authentication/data";
import { SignUpApiBody } from "../types";
import { useAuthDispatch } from "../AuthProvider";
import { useRouter } from "next/router";

export function useSignUp() {
    const setUser = useAuthDispatch();
    const router = useRouter();

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

        signUpApi(body).then(res => {
            if (setUser) {
                setUser(res.data.user);
                router.push("/");
            }
        });
    }

    return {
        signup,
    };
}
