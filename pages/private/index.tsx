import { MainLayout } from "@app/layout";
import { NextPageWithLayout } from "@app/types";
import { PrivatePage } from "@app/authentication";

const Private: NextPageWithLayout = () => {
    return (
        <PrivatePage>
            <h1>Private page</h1>
        </PrivatePage>
    );
};

Private.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Private;
