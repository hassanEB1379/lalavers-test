import { ReactNode, useEffect } from "react";
import { AuthContextValues, useAuth } from "./AuthProvider";
import { useRouter } from "next/router";

interface AccessLevelProps {
    children: ReactNode;
    level: "private" | "restricted";
}

export const AccessLevel = ({ children, level }: AccessLevelProps) => {
    const { isAuthenticated, loading } = useAuth() as AuthContextValues;
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!isAuthenticated && level === "private") {
                router.push("/sign-in");
            }

            if (isAuthenticated && level === "restricted") {
                router.push("/");
            }
        }
    }, [isAuthenticated, level, loading, router]);

    if (loading) {
        return null;
    }

    return <>{children}</>;
};
