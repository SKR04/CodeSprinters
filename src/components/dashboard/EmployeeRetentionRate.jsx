import React, { useState, useEffect } from "react";
import {
  Card,
  Title,
  Flex,
  Icon,
  LineChart,
  Callout,
  AreaChart,
} from "@tremor/react";

import processForecastData from "../../utils/formattedData.js";

import {
  UserIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "@heroicons/react/solid";

const EmployeeRetentionRate = () => {
  const empRetRate = processForecastData("Employee retention rate");
  const [percentageChange, setPercentageChange] = useState(null);
  const [formattedTitle, setFormattedTitle] = useState("");

  useEffect(() => {
    const len = empRetRate.length;
    const currentYearAvg = empRetRate[len - 1].Average;
    const previousYearAvg = empRetRate[len - 2].Average;

    const change = ((currentYearAvg - previousYearAvg) / previousYearAvg) * 100;
    setPercentageChange(change);

    const absChange = Math.abs(change);
    const direction = change >= 0 ? "more" : "less";

    setFormattedTitle(`${absChange.toFixed(2)}% ${direction} than last year`);
  }, [empRetRate, setPercentageChange, setFormattedTitle]);

  return (
    <Card
      decoration="left"
      decorationColor="purple"
      className="max-w-[52rem] max-h-screen mx-3 mt-2.5 p-6 bg-white"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon variant="outlined" icon={UserIcon} size="sm" color="indigo" />
        <Title className="truncate font-semiBold">
          Employee Retention Rate
        </Title>
      </Flex>
      <div>
        <LineChart
          className="h-72 mt-1 max-w-[52rem] text-black"
          data={empRetRate}
          index="fy"
          categories={["First Half", "Second Half", "Average"]}
          colors={["red", "blue", "emerald"]}
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

export default EmployeeRetentionRate;
