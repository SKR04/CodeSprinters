import React from "react";
import { CgNotes } from "react-icons/cg";
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  Icon,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  Flex,
  Badge,
  BadgeDelta,
  Metric,
  Col,
  TableBody,
  TableCell,
  //   TableRow,
} from "@tremor/react";

const Overview = ({ overviewData }) => {
  return (
    <Card
      className="truncate mt-3 ml-2.5 mr-3 gap-4 max-w-[36rem] h-[23.5rem] bg-white"
      decoration="left"
      decorationColor="purple"
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon variant="outlined" icon={CgNotes} size="sm" color="indigo" />
        <Title className="truncate font-semiBold">Overview</Title>
      </Flex>
      <Table className="mt-1">
        <TableHead className="font-semiBold">
          <TableRow>
            <TableHeaderCell className="px-0 py-0.5 pt-2.5 text-left">
              Parameter
            </TableHeaderCell>
            <TableHeaderCell className="px-1 py-0.5 pt-2.5 ">
              Value
            </TableHeaderCell>
            <TableHeaderCell className="px-1 py-0.5 pt-2.5 text-center">
              Status
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="mt-0">
          {overviewData.map((item) => (
            <TableRow key={item.parameter}>
              <TableCell className=" text-left px-0 pt-2 pb-2">
                {item.parameter}
              </TableCell>
              <TableCell className="pt-2 pb-2">{item.value}</TableCell>
              <TableCell className="pt-2 pb-2 pr-0 justify-center">
                <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Overview;
