import { Dispatch, SetStateAction } from "react";

export interface SignUpApiBody {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: {
        number: string;
        countryCode: string;
    };
    password: string;
    captchaCode: string;
}

export interface SignInApiBody {
    id: string;
    password: string;
    captchaCode: string;
}

export type AuthDispatch = Dispatch<SetStateAction<User>>;

export interface UserProperties {
    name?: string;
}

export type User = UserProperties | null;

export interface AuthContextValues {
    isAuthenticated: boolean;
    user: User;
    loading: boolean;
}
