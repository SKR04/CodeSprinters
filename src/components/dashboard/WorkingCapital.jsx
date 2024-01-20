import React, { useState, useEffect } from "react";
import {
  Card,
  Title,
  Flex,
  Icon,
  LineChart,
  Callout,
  BarChart,
} from "@tremor/react";

import processForecastData from "../../utils/formattedData.js";

import {
  UserIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "@heroicons/react/solid";

import { FaBriefcase } from "react-icons/fa";

const WorkingCapital = () => {
  const workingCapitalData = processForecastData("Working Capital");
  const [percentageChange, setPercentageChange] = useState(null);
  const [formattedTitle, setFormattedTitle] = useState("");

  console.log(workingCapitalData);

  useEffect(() => {
    const len = workingCapitalData.length;
    const currYear = workingCapitalData[len - 1].Average;
    const prevYear = workingCapitalData[len - 2].Average;
    const change = ((currYear - prevYear) / prevYear) * 100;
    setPercentageChange(change);

    const absChange = Math.abs(change);
    const direction = change >= 0 ? "more" : "less";

    setFormattedTitle(`${absChange.toFixed(2)}% ${direction} than last year`);
  }, [workingCapitalData, setPercentageChange, setFormattedTitle]);

  return (
    <Card className="max-w-3xl mx-auto p-6">
      <Flex justifyContent="start" className="space-x-4">
        <Icon variant="outlined" icon={FaBriefcase} size="sm" color="indigo" />
        <Title className="truncate">Working Capital</Title>
      </Flex>
      <div>
        <BarChart
          className="h-72 mt-1 max-w-3xl"
          data={workingCapitalData}
          index="fy"
          categories={["First Half", "Second Half"]}
          colors={["indigo", "rose"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          showAnimation={true}
          animationDuration={2}
          // Add other relevant props as needed
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
        {/* Add Callout for percentage change if needed */}
      </div>
    </Card>
  );
};

export default WorkingCapital;
