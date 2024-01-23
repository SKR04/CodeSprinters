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
  const [percentageChange, setPercentageChange] = useState(null);
  const [formattedTitle, setFormattedTitle] = useState("");

  // console.log(empTor);

  useEffect(() => {
    // Calculate percentage change
    if (empTor.length >= 2) {
      const len = empTor.length;
      const currentYearAvg = empTor[len - 1].Average;
      const previousYearAvg = empTor[len - 2].Average;
      const change =
        ((currentYearAvg - previousYearAvg) / previousYearAvg) * 100;
      setPercentageChange(change);

      // Calculate absolute value and direction
      const absChange = Math.abs(change);
      const direction = change >= 0 ? "more" : "less";

      setFormattedTitle(`${absChange.toFixed(2)}% ${direction} than last year`);
    }
  }, [empTor, setPercentageChange, setFormattedTitle]);

  return (
    <Card
      decoration="left"
      decorationColor="rose"
      className="max-w-2xl mt-10 max-h-screen mx-auto p-6"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon variant="outlined" icon={UserIcon} size="sm" color="rose" />
        <Title className="truncate">Employee Turnover Rate</Title>
      </Flex>
      <div>
        <LineChart
          className="h-72 mt-1 max-w-2xl"
          data={empTor}
          index="fy"
          categories={["First Half", "Second Half", "Average"]}
          colors={["neutral", "indigo", "rose"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          // enableLegendSlider={true}
          showAnimation={true}
          curveType="monotone"
          tickGap={12}
          autoMinValue={true}
        />
        {percentageChange !== null && (
          <Callout
            title={formattedTitle}
            icon={percentageChange >= 0 ? TrendingUpIcon : TrendingDownIcon}
            color={percentageChange >= 0 ? "emerald" : "rose"}
            className="mt-4"
          >
            {/* Display the text accordingly */}
          </Callout>
        )}
      </div>
    </Card>
  );
};

export default EmployeeTurnOverRate;
