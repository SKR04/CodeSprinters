import React from "react";
import EmployeeTurnoverRate from "./EmployeeTurnOverRate";
import EmployeeRetentionRate from "./EmployeeRetentionRate";
import GrossProfitMargin from "./GrossProfitMargin";
import WorkingCapital from "./WorkingCapital";
import ReturnOnEquity from "./ReturnOnEquity";
import NiftyIT from "./NiftyIT";
import ProjectsInvolved from "./ProjectsInvolved";
import ProjectsDelivered from "./ProjectsDelivered";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <EmployeeTurnoverRate />
      <EmployeeRetentionRate />
      <GrossProfitMargin />
      <WorkingCapital />
      {/* <ReturnOnEquity />
      <NiftyIT />
      <ProjectsInvolved />
      <ProjectsDelivered /> */}
    </div>
  );
};
export default Dashboard;
