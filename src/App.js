import React, { memo, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from 'react-router-dom';

import SiteRoutes from "./routes";
import { loadI18nConfig } from "./i18n";

import Spinner from "./common/components/Spinner/Spinner";
import Layout from "./pages/Layout";

import "@fontsource/sora";
import "./scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="center">
            <Spinner size="large" />
          </div>
        }
      >
        <I18nextProvider i18n={loadI18nConfig()}>
          {/*<DataContext.Provider value={{ data }}>*/}
            <BrowserRouter>
              <div className="hoge">
                <Layout>
                  <SiteRoutes />
                </Layout>
              </div>
            </BrowserRouter>
          {/*</DataContext.Provider>*/}
        </I18nextProvider>
      </Suspense>
    </div>
  );
};

export default memo(App);
