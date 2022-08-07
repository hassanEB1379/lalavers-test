import { SignInApiBody } from "@app/authentication";
import { api, endpoints } from "@app/api";

export const signIn = (body: SignInApiBody) => {
    return api.post(endpoints.SIGNIN, body);
};
