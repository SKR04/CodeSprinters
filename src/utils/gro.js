import grossProfitData from "./grossUtil";

const getGrossProfitData = (key) => {
  const grossProfitMargins = grossProfitData(key);
  //   console.log(grossProfitMargins);

  if (grossProfitMargins.length >= 2) {
    const len = grossProfitMargins.length;
    const currentYearMargin = grossProfitMargins[len - 1][key];
    const prevYearMargin = grossProfitMargins[len - 2][key];
    const change =
      ((currentYearMargin - prevYearMargin) / prevYearMargin) * 100;
    const averageMargin =
      grossProfitMargins.reduce((sum, entry) => sum + entry[key], 0) /
      grossProfitMargins.length;

    const maxMarginEntry = grossProfitMargins.reduce((maxEntry, entry) => {
      return entry[key] > maxEntry[key] ? entry : maxEntry;
    }, grossProfitMargins[0]);

    const minMarginEntry = grossProfitMargins.reduce((minEntry, entry) => {
      return entry[key] < minEntry[key] ? entry : minEntry;
    }, grossProfitMargins[0]);

    let data = {
      currentYear: grossProfitMargins[len - 1].fy,
      currentYearMargin: currentYearMargin,
      prevYearMargin: prevYearMargin,
      prevYear: grossProfitMargins[len - 2].fy,
      percentChange: change.toFixed(2),
      average: averageMargin.toFixed(2),
      allTimeHigh: maxMarginEntry[key].toFixed(2),
      yearWithAllTimeHigh: maxMarginEntry.fy,
      allTimeLow: minMarginEntry[key].toFixed(2),
      yearWithAllTimeLow: minMarginEntry.fy,
    };

    return data;
  }
};

export default getGrossProfitData;
