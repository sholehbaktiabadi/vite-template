import React from "react";
import Navbar from "../component/nav";
import { Footer } from "../component/footer";

const Layout = ({ props }) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <header className="h-10">
          <Navbar />
        </header>
        <br/>
        {props}
        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
