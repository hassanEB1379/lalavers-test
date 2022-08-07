import { useAuthDispatch } from "../AuthProvider";
import { logout } from "@app/authentication/data";

export const useLogout = () => {
    const setUser = useAuthDispatch();

    return async function () {
        const { status } = await logout();
        if (status === 200 && setUser) {
            setUser(null);
        }
    };
};
