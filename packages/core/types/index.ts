import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export interface SignUpFormFields {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    countryCode: string;
}

export interface SignInFormFields {
    email: string;
    password: string;
}
