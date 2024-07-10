import React from "react";
import Navigation from "../stracture/header/Navigation";
import Footer from "../stracture/Footer";

const AppLayout = ({ children }: any) => {
  return (
    <div className="mx overflow-hidden ">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
