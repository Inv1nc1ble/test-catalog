import { I18nextProvider } from "react-i18next";

import i18n from "../config/i18n";
import AppLayout from "../components/appLayout/AppLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <AppLayout pageProps={pageProps}>
        <Component {...pageProps} />
      </AppLayout>
    </I18nextProvider>
  );
}

export default MyApp;
