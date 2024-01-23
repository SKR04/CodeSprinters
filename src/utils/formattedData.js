// formatData.js

import forecastHiringData from '../assets/forecast_hiring.json';

const processForecastData = (key) => {
  let currentFinancialYear = 2022;
  const resultData = [];

  for (let i = 0; i < 28; i += 2) {
    const firstHalf = forecastHiringData[i];
    const secondHalf = forecastHiringData[i + 1];


    let firstHalfValue = firstHalf[key];
    let secondHalfValue = secondHalf[key];
    if (typeof firstHalfValue === 'string') {
      firstHalfValue = parseFloat(firstHalfValue.replace(/,/g, ''));
    }

    if (typeof secondHalfValue === 'string') {
      secondHalfValue = parseFloat(secondHalfValue.replace(/,/g, ''));
    }
    const average = (firstHalfValue + secondHalfValue) / 2;
    const value = {
      "fy": currentFinancialYear--,
      "First Half": typeof firstHalf[key] === 'string' ? parseFloat(firstHalf[key].replace(/,/g, '')) : firstHalf[key],
      "Second Half": typeof secondHalf[key] === 'string' ? parseFloat(secondHalf[key].replace(/,/g, '')) : secondHalf[key],
      "Average": average,
    };
    resultData.push(value);
  }

  return resultData.reverse();
};

export default processForecastData;
