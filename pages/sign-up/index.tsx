import { NextPageWithLayout } from "@app/types";
import { MainLayout } from "@app/layout";
import { SignUpPage } from "@app/sign-up";
import { AccessLevel } from "@app/authentication";

const SignUp: NextPageWithLayout = () => {
    return (
        <AccessLevel level="restricted">
            <SignUpPage />
        </AccessLevel>
    );
};

SignUp.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default SignUp;
