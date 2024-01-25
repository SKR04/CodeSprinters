import React, { useEffect, useState } from "react";
import {
  LineChart,
  Card,
  Title,
  Flex,
  Icon,
  Callout,
  AreaChart,
} from "@tremor/react";

import processForecastData from "../../utils/formattedData.js";

import {
  UserIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "@heroicons/react/solid";

const EmployeeTurnOverRate = () => {
  const empTor = processForecastData("Employee turnover rate");

  return (
    <Card
      decoration="left"
      decorationColor="purple"
      className="max-w-[52rem] max-h-screen mx-3 mt-2.5 p-6 bg-white"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon variant="outlined" icon={UserIcon} size="sm" color="indigo" />
        <Title className="truncate font-semiBold">Employee Turnover Rate</Title>
      </Flex>
      <div>
        <LineChart
          className="h-72 mt-1 max-w-[52rem]"
          data={empTor}
          index="fy"
          categories={["First Half", "Second Half", "Average"]}
          colors={["emerald", "indigo", "rose"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          // enableLegendSlider={true}
          showAnimation={true}
          curveType="monotone"
          tickGap={12}
          autoMinValue={true}
        />
      </div>
    </Card>
  );
};

export default EmployeeTurnOverRate;
