import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

type AuthDispatch = Dispatch<SetStateAction<boolean>>;

const AuthContext = createContext<boolean | null>(null);
const AuthDispatchContext = createContext<AuthDispatch | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function useAuthDispatch() {
    return useContext(AuthDispatchContext);
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    return (
        <AuthContext.Provider value={isAuthorized}>
            <AuthDispatchContext.Provider value={setIsAuthorized}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    );
};