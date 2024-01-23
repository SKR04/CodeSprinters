import React from "react";
import EmployeeTurnoverRate from "./EmployeeTurnOverRate";
import EmployeeRetentionRate from "./EmployeeRetentionRate";
import GrossProfitMargin from "./GrossProfitMargin";
import WorkingCapital from "./WorkingCapital";
import ReturnOnEquity from "./ReturnOnEquity";
import NiftyIT from "./NiftyIT";
import ProjectsInvolved from "./ProjectsInvolved";
import { Button } from "../ui/button";

const Dashboard = () => {
  return (
    <div>
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
