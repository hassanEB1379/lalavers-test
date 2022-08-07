import { SignInApiBody } from "../types";
import { api, endpoints } from "@app/api";

export const signIn = (body: SignInApiBody) => {
    return api.post(endpoints.SIGNIN, body);
};
