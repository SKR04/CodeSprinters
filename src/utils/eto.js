import processForecastData from "./formattedData";

const getData = (key) => {
  const empTor = processForecastData(key);

  if (empTor.length >= 2) {
    var len = empTor.length;
    var currentYearAvg = empTor[len - 1].Average;
    var previousYearAvg = empTor[len - 2].Average;
    var change = ((currentYearAvg - previousYearAvg) / previousYearAvg) * 100;
  }

  const maxAverageEntry = empTor.reduce((maxEntry, entry) => {
    return entry.Average > maxEntry.Average ? entry : maxEntry;
  }, empTor[0]);

  const minAverageEntry = empTor.reduce((minEntry, entry) => {
    return entry.Average < minEntry.Average ? entry : minEntry;
  }, empTor[0]);

  let data = {
    currentYear: empTor[len - 1].fy,
    avgThisYear: currentYearAvg,
    avgPrevYear: previousYearAvg,
    avgPercentChange: change.toFixed(2),
    secondHalfThisYear: empTor[len - 1]["Second Half"],
    firstHalfThisYear: empTor[len - 1]["First Half"],
    percentChange: (
      ((empTor[len - 1]["Second Half"] - empTor[len - 1]["First Half"]) /
        empTor[len - 1]["First Half"]) *
      100
    ).toFixed(2),
    allTimeHigh: maxAverageEntry.Average,
    yearWithMaxAverage: maxAverageEntry.fy,
    allTimeLow: minAverageEntry.Average,
    yearWithMinAverage: minAverageEntry.fy,
  };

  return data;
};

export default getData;
