import React from "react";
import { NextPageWithLayout } from "@app/types";
import { MainLayout } from "@app/layout";

const SignIn: NextPageWithLayout = () => {
    return (
        <div>
            <h1>sign in</h1>
        </div>
    );
};

SignIn.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default SignIn;
