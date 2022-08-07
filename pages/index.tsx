import HomePage from "@app/home";
import { MainLayout } from "@app/layout";
import { NextPageWithLayout } from "@app/types";

const Home: NextPageWithLayout = () => {
    return <HomePage />;
};

Home.getLayout = function (page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
