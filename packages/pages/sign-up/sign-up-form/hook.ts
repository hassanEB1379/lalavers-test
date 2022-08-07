import { useRouter } from "next/router";
import { SignUpApiBody, SignUpFormFields } from "@app/sign-up/shared";
import { signup } from "@app/sign-up/data";

export function useSignUp() {
    const router = useRouter();

    return function (data: SignUpFormFields) {
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

        signup(body)
            .then(res => {
                console.log(res.headers["Set-Cookie"]);
                router.push("/");
            })
            .catch(e => {
                console.error(e);
            });
    };
}
