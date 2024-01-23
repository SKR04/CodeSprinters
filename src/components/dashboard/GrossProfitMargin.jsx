// GrossProfitMargin.jsx
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Card,
  Title,
  Flex,
  Icon,
  Callout,
  BarChart,
} from "@tremor/react";

// import processForecastData from "../../utils/formattedData.js";
import grossProfitData from "../../utils/grossUtil.js";

import { FaDollarSign, FaMoneyBill } from "react-icons/fa";

import { TrendingUpIcon, TrendingDownIcon } from "@heroicons/react/solid";

const GrossProfitMargin = () => {
  let grossProfitMarginData = grossProfitData("Gross profit margin");

  // console.log(grossProfitMarginData);
  const [percentageChange, setPercentageChange] = useState(null);
  const [formattedTitle, setFormattedTitle] = useState("");

  // console.log(grossProfitMarginData);

  useEffect(() => {
    const len = grossProfitMarginData.length;
    const currentYear = grossProfitMarginData[len - 1]["Gross profit margin"];
    const previousYear = grossProfitMarginData[len - 2]["Gross profit margin"];

    const change = ((currentYear - previousYear) / previousYear) * 100;
    setPercentageChange(change);

    const absChange = Math.abs(change);
    const direction = change >= 0 ? "more" : "less";

    setFormattedTitle(`${absChange.toFixed(2)}% ${direction} than last year`);
  }, [grossProfitMarginData, setPercentageChange, setFormattedTitle]);

  return (
    <Card
      decoration="left"
      decorationColor="blue"
      className="max-w-2xl mx-auto p-6"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon variant="outlined" icon={FaDollarSign} size="sm" color="indigo" />
        <Title className="truncate">Gross Profit Margin</Title>
      </Flex>
      <div>
        <BarChart
          className="h-72 mt-1 max-w-2xl"
          data={grossProfitMarginData}
          index="fy"
          categories={["Gross profit margin"]}
          colors={["indigo"]}
          yAxisWidth={30}
        />
        {percentageChange !== null && (
          <Callout
            title={formattedTitle}
            icon={percentageChange >= 0 ? TrendingUpIcon : TrendingDownIcon}
            color={percentageChange >= 0 ? "emerald" : "rose"}
            className="mt-4"
          ></Callout>
        )}
      </div>
    </Card>
  );
};

export default GrossProfitMargin;
