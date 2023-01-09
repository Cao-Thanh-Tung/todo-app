import "../styles/globals.css";
import { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import wrapper from "../redux/store";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@icon/themify-icons/themify-icons.css"
        />
      </Head>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
