import HeadMain from "../components/head/HeadMain";
import Layout from "../components/layout/Layout";
import { ItemsContextProvider } from "../components/store/ItemsContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ItemsContextProvider>
      <HeadMain />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ItemsContextProvider>
  );
}
