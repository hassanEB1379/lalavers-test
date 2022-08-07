import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { AuthContextValues, AuthDispatch, User } from "@app/authentication";
import { getCurrentUser } from "@app/authentication/data";

const AuthContext = createContext<AuthContextValues | null>(null);

const AuthDispatchContext = createContext<AuthDispatch | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function useAuthDispatch() {
    return useContext(AuthDispatchContext);
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    return (
        <AuthContext.Provider
            value={{ isAuthenticated: !!user, user, loading }}
        >
            <AuthDispatchContext.Provider value={setUser}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    );
};
