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
      className="max-w-3xl mx-auto p-6"
      decoration="left"
      decorationColor="blue"
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
          className="h-72 mt-2 max-w-3xl"
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
          animationDuration={4}
          autoMinValue={true}
          onValueChange={(v) => setValue(v)}
        />
      </div>
    </Card>
  );
};

export default ProjectsInvolved;
