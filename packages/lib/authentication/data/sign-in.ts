import { SignInApiBody } from "@app/authentication/types";
import { api, endpoints } from "@app/api";

export const signIn = (body: SignInApiBody) => {
    return api.post(endpoints.SIGNIN, body);
};
