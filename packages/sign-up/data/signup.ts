import { SignUpFormFields } from "@app/sign-up/shared";
import { api, endpoints } from "@app/api";

export function signup(data: SignUpFormFields) {
    return api.post(endpoints.SIGNUP, data);
}
