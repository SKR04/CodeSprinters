import forecastHiringData from '../assets/forecast_hiring.json';

const grossProfitData = (key) => {
    let currentFinancialYear = 2022;
  const resultData = [];

  for (let i = 0; i < 30; i += 2) {
    const grossProfit = forecastHiringData[i];
    const value  = {
        "fy": currentFinancialYear--,
        "Gross Profit": grossProfit[key],
    }

    resultData.push(value);
  }

  return resultData.reverse();
}

export default grossProfitData;