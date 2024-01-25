import React, { useState, useEffect } from "react";
import {
  Card,
  Title,
  Flex,
  Icon,
  LineChart,
  Callout,
  BarChart,
  AreaChart,
  Legend,
} from "@tremor/react";
import formattedProjects from "../../utils/projectUtil";

import { FaBriefcase, FaProjectDiagram, FaTasks } from "react-icons/fa";
// console.log(formattedProjects());

const ProjectsInvolved = () => {
  const projectData = formattedProjects();
  // console.log(projectData);

  return (
    <Card
      decoration="left"
      decorationColor="purple"
      className="max-w-[52rem] max-h-screen mx-3 mt-2.5 p-6 bg-white"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon
          variant="outlined"
          icon={FaProjectDiagram}
          size="sm"
          color="indigo"
        />
        <Title className="truncate">Project Data</Title>
      </Flex>
      <div>
        <AreaChart
          className="h-72 mt-1 max-w-[52rem]"
          data={projectData}
          index="fy"
          categories={[
            "Projects Delivered",
            "Projects Involved",
            "Projects in Progress",
          ]}
          showLegend={true}
          curveType="monotone"
          yAxisWidth={30}
          showAnimation={true}
          autoMinValue={true}
          onValueChange={(v) => setValue(v)}
        />
      </div>
    </Card>
  );
};

export default ProjectsInvolved;
