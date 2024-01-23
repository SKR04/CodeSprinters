// ReturnOnEquity.jsx
import React, { useState, useEffect } from "react";
import { BarChart, Card, Title, Flex, Icon, Callout } from "@tremor/react";
import returnOnEquityData from "../../utils/grossUtil.js";
import { TrendingUpIcon, TrendingDownIcon } from "@heroicons/react/solid";

const ReturnOnEquity = () => {
  let returnOnEquityChartData = returnOnEquityData("Return on Equity");
  const [percentageChange, setPercentageChange] = useState(null);
  const [formattedTitle, setFormattedTitle] = useState("");

  useEffect(() => {
    const len = returnOnEquityChartData.length;
    if (len >= 2) {
      const currentYear = returnOnEquityChartData[len - 1]["Return on Equity"];
      const previousYear = returnOnEquityChartData[len - 2]["Return on Equity"];

      const change = ((currentYear - previousYear) / previousYear) * 100;
      setPercentageChange(change);

      const absChange = Math.abs(change);
      const direction = change >= 0 ? "more" : "less";

      setFormattedTitle(`${absChange.toFixed(2)}% ${direction} than last year`);
    }
  }, [returnOnEquityChartData]);

  return (
    <Card
      decoration="left"
      decorationColor="purple"
      className="max-w-2xl mx-auto p-6"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon
          variant="outlined"
          icon={TrendingUpIcon}
          size="sm"
          color="purple"
        />
        <Title className="truncate">Return on Equity</Title>
      </Flex>
      <div>
        <BarChart
          className="h-72 mt-1 max-w-2xl"
          data={returnOnEquityChartData}
          index="fy"
          categories={["Return on Equity"]}
          colors={["purple"]}
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

export default ReturnOnEquity;
