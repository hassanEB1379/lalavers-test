import { useRouter } from "next/router";
import { signin } from "@app/sign-in/data";
import { SignInFormFields, SignInApiBody } from "../shared";

export function useSignIn() {
    const router = useRouter();

    return function (data: SignInFormFields) {
        const body: SignInApiBody = {
            id: data.email,
            password: data.password,
            captchaCode: "hhhhhhhh",
        };

        signin(body)
            .then(res => {
                let token = res.headers["set-cookie"];
                console.log(token);
                if (token) document.cookie = token[0];
                router.push("/");
            })
            .catch(e => {
                console.error(e);
            });
    };
}
