import React from "react";
import { NextPageWithLayout } from "@app/types";
import { MainLayout } from "@app/layout";
import { SignInPage } from "@app/sign-in";
import { AccessLevel } from "@app/authentication";

const SignIn: NextPageWithLayout = () => {
    return (
        <AccessLevel level="restricted">
            <SignInPage />
        </AccessLevel>
    );
};

SignIn.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default SignIn;
