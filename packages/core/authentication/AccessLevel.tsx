import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/router";

interface AccessLevelProps {
    children: ReactNode;
    level: "private" | "restricted";
}

export const AccessLevel = ({ children, level }: AccessLevelProps) => {
    const [show, setShow] = useState(false);
    const isAuthorized = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthorized && level === "private") {
            router.push("/sign-in");
        } else if (isAuthorized && level === "restricted") {
            router.push("/");
        } else {
            setShow(true);
        }
    }, [isAuthorized, level, router]);

    return <>{show && children}</>;
};
