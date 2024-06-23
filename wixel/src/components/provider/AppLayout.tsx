import React from "react";
import Navigation from "../stracture/header/Navigation";
import Footer from "../stracture/Footer";

const AppLayout = ({ children }: any) => {
  return (
    <div className="mx-auto max-w-[1770px] overflow-x-hidden mt-[110px]">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
