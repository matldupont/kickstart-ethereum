import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "semantic-ui-css/semantic.min.css";
import { Layout } from "../src/components/Layout";

export default function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
