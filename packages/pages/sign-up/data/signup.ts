import { SignUpApiBody } from "@app/sign-up/shared";
import { api, endpoints } from "@app/api";

export function signup(data: SignUpApiBody) {
    return api.post(endpoints.SIGNUP, data);
}
