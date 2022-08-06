import { NextPageWithLayout } from "@app/types";
import { MainLayout } from "@app/layout";
import { SignUpPage } from "@app/sign-up";

const SignUp: NextPageWithLayout = () => {
    return <SignUpPage />;
};

SignUp.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default SignUp;
