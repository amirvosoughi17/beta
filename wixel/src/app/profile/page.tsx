import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProfileForm from "@/components/forms/ProfileForm";
import React from "react";

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center">
        <ProfileForm />
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
