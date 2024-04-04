import DashboardSideNav from "./DashboardSideNav";



const DashboardLayout = ({ children }) => {
  return (
      <div>
        <DashboardSideNav />
        {children}
      </div>
  );
};

export default DashboardLayout;
