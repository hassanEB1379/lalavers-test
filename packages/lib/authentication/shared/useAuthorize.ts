import { useEffect } from "react";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import {
    useAuth,
    useAuthDispatch,
    AuthContextValues,
    AuthDispatch,
} from "@app/authentication";

export const useAuthorize = () => {
    const setUser = useAuthDispatch() as AuthDispatch;
    const { isAuthenticated } = useAuth() as AuthContextValues;
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) router.push("/private");
    }, [router, isAuthenticated]);

    return function (apiCall: () => Promise<AxiosResponse>) {
        apiCall().then(res => setUser(res.data.user));
    };
};
