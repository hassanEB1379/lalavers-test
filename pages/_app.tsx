import React from "react";
import { AppPropsWithLayout } from "@app/types";
import { AuthProvider } from "@app/authentication";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || (page => page);

    return (
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    );
}

export default MyApp;
