
import React from "react";
import DashboardNavigation from "./DashboardNavigation";



const DashboardLayout = ({ children }: any) => {
  return (
    <div className="w-full flex min-h-screen sm:mb-[400px] md:mb-[50px] p-5">
        <DashboardNavigation />
        <div className="w-full mt-[75px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
