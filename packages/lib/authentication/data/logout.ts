import { api, endpoints } from "@app/api";

export const logout = () => {
    return api.get(endpoints.LOGOUT, { withCredentials: true });
};
