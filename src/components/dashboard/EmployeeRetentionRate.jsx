import React, { useState, useEffect } from "react";
import { Card, Title, Flex, Icon, LineChart, Callout } from "@tremor/react";

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
      decorationColor="rose"
      className="max-w-2xl mt-10 max-h-screen mx-auto p-6"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon variant="outlined" icon={UserIcon} size="sm" color="rose" />
        <Title className="truncate text-white font-semiBold">
          Employee Retention Rate
        </Title>
      </Flex>
      <div>
        <LineChart
          className="h-72 mt-1 max-w-2xl text-white"
          data={empRetRate}
          index="fy"
          categories={["First Half", "Second Half", "Average"]}
          colors={["red", "blue", "emerald"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          // enableLegendSlider={true}
          showAnimation={true}
          animationDuration={2}
          curveType="monotone"
          tickGap={12}
          autoMinValue={true}
        />
        {percentageChange !== null && (
          <Callout
            title={formattedTitle}
            icon={percentageChange >= 0 ? TrendingUpIcon : TrendingDownIcon}
            color={percentageChange >= 0 ? "emerald" : "red"}
            className="mt-4"
          ></Callout>
        )}
      </div>
    </Card>
  );
};

export default EmployeeRetentionRate;
