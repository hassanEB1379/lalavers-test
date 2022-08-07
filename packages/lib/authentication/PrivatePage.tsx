import { ReactNode, useEffect } from "react";
import { AuthContextValues } from "@app/authentication";
import { useRouter } from "next/router";
import { useAuth } from "./AuthProvider";

interface PrivatePageProps {
    children: ReactNode;
}

export const PrivatePage = ({ children }: PrivatePageProps) => {
    const { isAuthenticated, loading } = useAuth() as AuthContextValues;
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push("/sign-in");
        }
    }, [isAuthenticated, loading, router]);

    if (loading) {
        return null;
    }

    return <>{children}</>;
};
