import { api, endpoints } from "@app/api";

export const getCurrentUser = () => {
    return api.get(endpoints.GET_CURRENT_USER, { withCredentials: true });
};
