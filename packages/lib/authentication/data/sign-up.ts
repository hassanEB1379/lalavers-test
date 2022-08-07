import { SignUpApiBody } from "@app/authentication";
import { api, endpoints } from "@app/api";

export const signUp = (body: SignUpApiBody) => {
    return api.post(endpoints.SIGNUP, body);
};
