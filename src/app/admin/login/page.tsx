import AdminLoginForm from "@/components/forms/AdminLoginForm";
import React from "react";

const AdminLoginPage = () => {
  return (
    <div className="h-full w-full dark:bg-neutral-950 bg-white  dark:bg-grid-small-white/[0.17] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <AdminLoginForm />
    </div>
  );
};

export default AdminLoginPage;
