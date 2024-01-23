import React from "react";
import EmployeeTurnoverRate from "../components/dashboard/EmployeeTurnOverRate";
import EmployeeRetentionRate from "../components/dashboard/EmployeeRetentionRate";
import GrossProfitMargin from "../components/dashboard/GrossProfitMargin";
import WorkingCapital from "../components/dashboard/WorkingCapital";
import ReturnOnEquity from "../components/dashboard/ReturnOnEquity";
import NiftyIT from "../components/dashboard/NiftyIT";
import ProjectsInvolved from "../components/dashboard/ProjectsInvolved";
// import { Button } from "../ui/button";

const Dashboard = () => {
  return (
    <div className="min-w-full">
      <EmployeeTurnoverRate />
      <EmployeeRetentionRate />
      <GrossProfitMargin />
      <WorkingCapital />
      <ReturnOnEquity />
      <NiftyIT />
      <ProjectsInvolved />
    </div>
  );
};
export default Dashboard;
