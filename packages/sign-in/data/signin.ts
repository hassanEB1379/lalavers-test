import { SignInApiBody } from "@app/sign-in/shared";
import { api, endpoints } from "@app/api";

export function signin(data: SignInApiBody) {
    return api.post(endpoints.SIGNIN, data);
}
