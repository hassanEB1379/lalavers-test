import { MainLayout } from "@app/layout";
import { NextPageWithLayout } from "@app/types";
import { AccessLevel } from "@app/authentication";

const Private: NextPageWithLayout = () => {
    return (
        <AccessLevel level="private">
            <h1>Private page</h1>
        </AccessLevel>
    );
};

Private.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Private;
