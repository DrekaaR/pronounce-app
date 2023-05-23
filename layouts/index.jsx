import ModalDownload from "components/ModalDownload/ModalDownload";
import WordContextProvider from "context/index";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

const Layout = (props) => {
  return (
    <WordContextProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main className="wrapper__content">
            <Routes>{props.children}</Routes>
          </main>
          <Footer />
          <ModalDownload ga={props.ga} />
        </div>
      </BrowserRouter>
    </WordContextProvider>
  );
};

export default Layout;
