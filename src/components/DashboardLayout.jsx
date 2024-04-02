import DashboardSideNav from "./DashboardSideNav";

import './dashboardLayout.css';

const DashboardLayout = ({ children }) => {
  return (
      <div>
        <DashboardSideNav />
        {children}
      </div>
  );
};

export default DashboardLayout;
