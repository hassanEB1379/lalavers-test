import React from "react";
import { NextPageWithLayout } from "@app/types";
import { MainLayout } from "@app/layout";
import { SignInPage } from "@app/sign-in";

const SignIn: NextPageWithLayout = () => {
    return <SignInPage />;
};

SignIn.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default SignIn;
