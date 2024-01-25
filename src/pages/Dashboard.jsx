import React from "react";
import EmployeeTurnoverRate from "../components/dashboard/EmployeeTurnOverRate";
import EmployeeRetentionRate from "../components/dashboard/EmployeeRetentionRate";
import GrossProfitMargin from "../components/dashboard/GrossProfitMargin";
import WorkingCapital from "../components/dashboard/WorkingCapital";
import ReturnOnEquity from "../components/dashboard/ReturnOnEquity";
import ProjectsInvolved from "../components/dashboard/ProjectsInvolved";
import Overview from "../components/Overview";
import getData from "../utils/eto";
import grossData from "../utils/gro";
import proData from "../utils/pro";
import niftyData from "../assets/CNXIT.json";
const empTurnoverData = getData("Employee turnover rate");
const empRetentionData = getData("Employee retention rate");
const empGpmData = grossData("Gross profit margin");
const empWcData = getData("Working Capital");
const empRoeData = grossData("Return on Equity");
const empProData = proData();
// console.log(empTurnoverData);
// console.log(empRetentionData);
const overviewData = [
  {
    parameter: "Turnover Rate",
    value: empTurnoverData.avgThisYear,
    deltaType:
      empTurnoverData.avgPercentChange > 0
        ? "moderateIncrease"
        : "moderateDecrease",
    delta: empTurnoverData.avgPercentChange > 0 ? "Increase" : "Decrease",
  },
  {
    parameter: "Retention Rate",
    value: empRetentionData.avgThisYear,
    deltaType:
      empRetentionData.avgPercentChange > 0
        ? "moderateIncrease"
        : "moderateDecrease",
    delta: empRetentionData.avgPercentChange > 0 ? "Increase" : "Decrease",
  },
  {
    parameter: "Gross Profit Margin",
    value: empGpmData.currentYearMargin.toLocaleString(),
    deltaType:
      empGpmData.percentChange > 0 ? "moderateIncrease" : "moderateDecrease",
    delta: empGpmData.percentChange > 0 ? "Increase" : "Decrease",
  },
  {
    parameter: "Working Capital",
    value: empWcData.secondHalfThisYear.toLocaleString(),
    deltaType:
      empWcData.secondHalfThisYear > empWcData.firstHalfThisYear
        ? "moderateIncrease"
        : "moderateDecrease",
    delta:
      empWcData.secondHalfThisYear > empWcData.firstHalfThisYear
        ? "Increase"
        : "Decrease",
  },
  {
    parameter: "Overall Project Success Ratio",
    value: (
      (empProData.totalProjectsDelivered / empProData.totalProjectsInvolved) *
      100
    ).toFixed(2),
    deltaType:
      empProData.percentChange < 0 ? "moderateIncrease" : "moderateDecrease",
    delta: empProData.percentChange < 0 ? "Increase" : "Decrease",
  },
  {
    parameter: "Nifty IT",
    value: niftyData[niftyData.length - 1]["Close"].toLocaleString(),
    deltaType:
      niftyData[niftyData.length - 1]["Close"] >
      niftyData[niftyData.length - 2]["Close"]
        ? "moderateIncrease"
        : "moderateDecrease",
    delta:
      niftyData[niftyData.length - 1]["Close"] >
      niftyData[niftyData.length - 2]["Close"]
        ? "Increase"
        : "Decrease",
  },
];

console.log(niftyData[niftyData.length - 1]);

// import { Button } from "../ui/button";

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Flex,
  Badge,
  BadgeDelta,
  Metric,
  Col,
} from "@tremor/react";

// console.log(getData("Employee turnover rate"));
const Dashboard = () => {
  return (
    <Card className="p-4 pt-3 w-9/10 h-[680px] ml-3 mr-3 bg-white mt-[5rem] border-black">
      <h2 className="text-3xl font-bold ml-3 text-black ">Dashboard</h2>
      <TabGroup>
        <TabList className="mt-4 ml-3 mb-4" variant="solid">
          <Tab className="">Employee Turnover</Tab>
          <Tab className="">Employee Retention</Tab>
          <Tab className="">Gross Profit Margin</Tab>
          <Tab className="">Working Capital</Tab>
          <Tab className="">Return On Equity</Tab>
          <Tab className="">Projects Involved</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              numItems={1}
              numItemsSm={2}
              numItemsLg={4}
              className="gap-8 m-3"
            >
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Turnover Rate</Text>
                  <BadgeDelta
                    deltaType={
                      empTurnoverData.secondHalfThisYear >
                      empTurnoverData.firstHalfThisYear
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empTurnoverData.percentChange}%
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empTurnoverData.secondHalfThisYear}
                  </Metric>
                  <Text>
                    from {empTurnoverData.firstHalfThisYear} in{" "}
                    {empTurnoverData.currentYear}(I)
                  </Text>
                </Flex>
              </Card>

              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Average Turnover Rate</Text>
                  <BadgeDelta
                    deltaType={
                      empTurnoverData.avgPercentChange > 0
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empTurnoverData.avgPercentChange}%
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empTurnoverData.avgThisYear}
                  </Metric>
                  <Text>from {empTurnoverData.avgPrevYear} last year</Text>
                </Flex>
              </Card>

              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time High</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3 mt-1"
                >
                  <Metric className="text-black">
                    {" "}
                    {empTurnoverData.allTimeHigh}
                  </Metric>
                  <Text>in the FY {empTurnoverData.yearWithMaxAverage} </Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time Low</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3 mt-1"
                >
                  <Metric className="text-black">
                    {" "}
                    {empTurnoverData.allTimeLow}
                  </Metric>
                  <Text>in the FY {empTurnoverData.yearWithMinAverage} </Text>
                </Flex>
              </Card>
            </Grid>
            <Flex>
              <EmployeeTurnoverRate />

              <Overview overviewData={overviewData} />
            </Flex>
          </TabPanel>

          {/* 
          Component 2
          */}

          <TabPanel>
            <Grid
              numItems={1}
              numItemsSm={2}
              numItemsLg={4}
              className="gap-8 m-3"
            >
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Rentention Rate</Text>
                  <BadgeDelta
                    deltaType={
                      empRetentionData.secondHalfThisYear >
                      empRetentionData.firstHalfThisYear
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empRetentionData.percentChange}%
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empRetentionData.secondHalfThisYear}
                  </Metric>
                  <Text>
                    from {empRetentionData.firstHalfThisYear} in{" "}
                    {empRetentionData.currentYear}(I)
                  </Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Average Rentention Rate</Text>
                  <BadgeDelta
                    deltaType={
                      empRetentionData.avgPercentChange > 0
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empRetentionData.avgPercentChange}%
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empRetentionData.avgThisYear}
                  </Metric>
                  <Text>from {empRetentionData.avgPrevYear} last year</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Text className="text-base">All Time High</Text>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empRetentionData.allTimeHigh}
                  </Metric>
                  <Text>in the FY {empRetentionData.yearWithMaxAverage}</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time Low</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {empRetentionData.allTimeLow}
                  </Metric>
                  <Text>in the FY {empRetentionData.yearWithMinAverage}</Text>
                </Flex>
              </Card>
            </Grid>
            <Flex>
              <EmployeeRetentionRate />

              <Overview overviewData={overviewData} />
            </Flex>
          </TabPanel>

          {/* 
          Component 3
          */}

          <TabPanel>
            <Grid
              numItems={1}
              numItemsSm={2}
              numItemsLg={4}
              className="gap-8 m-3"
            >
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Gross Profit Margin</Text>
                  <BadgeDelta
                    deltaType={
                      empGpmData.currentYearMargin > empGpmData.prevYearMargin
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empGpmData.percentChange}%
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {empGpmData.currentYearMargin}
                  </Metric>
                  <Text>from {empGpmData.prevYearMargin} last year</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Average Gross Profit Margin</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">{empGpmData.average}</Metric>
                  <Text>over the years</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time High</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empGpmData.allTimeHigh}
                  </Metric>
                  <Text>in the FY {empGpmData.yearWithAllTimeHigh}</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time Low</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empGpmData.allTimeLow}
                  </Metric>
                  <Text>in the FY {empGpmData.yearWithAllTimeLow}</Text>
                </Flex>
              </Card>
            </Grid>
            <Flex>
              <GrossProfitMargin />

              <Overview overviewData={overviewData} />
            </Flex>
          </TabPanel>

          {/* Compoenent 4 
          Working Capital 
          */}

          <TabPanel>
            <Grid
              numItems={1}
              numItemsSm={2}
              numItemsLg={4}
              className="gap-8 m-3"
            >
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Working Capital</Text>
                  <BadgeDelta
                    deltaType={
                      empWcData.secondHalfThisYear > empWcData.firstHalfThisYear
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empWcData.percentChange}%
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empWcData.secondHalfThisYear.toLocaleString()}
                  </Metric>
                  <Text>
                    from {empWcData.firstHalfThisYear.toLocaleString()} in{" "}
                    {empWcData.currentYear} (I)
                  </Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Average Working Capital</Text>
                  <BadgeDelta
                    deltaType={
                      empWcData.avgThisYear > empWcData.avgPrevYear
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empWcData.avgPercentChange}
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empWcData.avgThisYear.toLocaleString()}
                  </Metric>
                  <Text>
                    from {empWcData.avgPrevYear.toLocaleString()} last year
                  </Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time Highest Average</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empWcData.allTimeHigh.toLocaleString()}
                  </Metric>
                  <Text>in the FY {empWcData.yearWithMaxAverage}</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time Lowest Average</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empWcData.allTimeLow.toLocaleString()}
                  </Metric>
                  <Text>in the FY {empWcData.yearWithMinAverage}</Text>
                </Flex>
              </Card>
            </Grid>
            <Flex>
              <WorkingCapital />

              <Overview overviewData={overviewData} />
            </Flex>
          </TabPanel>

          {/* Component 5 
          Return on Equity */}
          <TabPanel>
            <Grid
              numItems={1}
              numItemsSm={2}
              numItemsLg={4}
              className="gap-8 m-3"
            >
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Return on Equity</Text>
                  <BadgeDelta
                    deltaType={
                      empRoeData.currentYearMargin > empRoeData.prevYearMargin
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empRoeData.percentChange}%
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empRoeData.currentYearMargin}
                  </Metric>
                  <Text>from {empRoeData.prevYearMargin} last year</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Average Return on Equity</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black"> {empRoeData.average}</Metric>
                  <Text>over the years</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time High</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empRoeData.allTimeHigh}
                  </Metric>
                  <Text>in the FY {empRoeData.yearWithAllTimeHigh}</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">All Time Low</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {empRoeData.allTimeLow}
                  </Metric>
                  <Text>in the FY {empRoeData.yearWithAllTimeLow}</Text>
                </Flex>
              </Card>
            </Grid>
            <Flex>
              <ReturnOnEquity />

              <Overview overviewData={overviewData} />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Grid
              numItems={1}
              numItemsSm={2}
              numItemsLg={4}
              className="gap-8 m-3"
            >
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Projects in Progress</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empProData.projectsInProgress}
                  </Metric>
                  <Text>in the FY {empProData.currentYear}</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Project Completion Ratio</Text>
                  <BadgeDelta
                    deltaType={
                      empProData.currentProjectsRatio >
                      empProData.prevProjectsRatio
                        ? "moderateIncrease"
                        : "moderateDecrease"
                    }
                  >
                    {empProData.percentChange}
                  </BadgeDelta>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empProData.currentProjectsRatio}
                  </Metric>
                  <Text>
                    from {empProData.prevProjectsRatio} in the FY{" "}
                    {empProData.prevYear}{" "}
                  </Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Total Projects Involved</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empProData.totalProjectsInvolved}
                  </Metric>
                  <Text>till FY {empProData.currentYear}</Text>
                </Flex>
              </Card>
              <Card
                decoration="left"
                decorationColor="purple"
                className="bg-white"
              >
                <Flex alignItems="start">
                  <Text className="text-base">Total Projects Delivered</Text>
                </Flex>
                <Flex
                  justifyContent="start"
                  alignItems="baseline"
                  className="truncate mt-1 space-x-3"
                >
                  <Metric className="text-black">
                    {" "}
                    {empProData.totalProjectsDelivered}
                  </Metric>
                  <Text>till FY {empProData.currentYear}</Text>
                </Flex>
              </Card>
            </Grid>
            <Flex>
              <ProjectsInvolved />

              <Overview overviewData={overviewData} />
            </Flex>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};
export default Dashboard;
