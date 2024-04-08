import DashboardSideNav from "./DashboardSideNav";



const DashboardLayout = ({ children }) => {
  return (
      <div className="max-w-[1540px] mx-auto">
        <DashboardSideNav />
        {children}
      </div>
  );
};

export default DashboardLayout;
