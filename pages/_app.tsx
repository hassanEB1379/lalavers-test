import React from "react";
import { AppPropsWithLayout } from "@app/types";
import { AuthProvider } from "@app/authentication";
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const [queryClient] = React.useState(() => new QueryClient());

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || (page => page);

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <AuthProvider>
                    {getLayout(<Component {...pageProps} />)}
                </AuthProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
