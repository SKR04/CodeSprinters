import forecastHiringData from "../assets/forecast_hiring.json";

const formattedProjects = (key) => {
  let currentFinancialYear = 2022;
  const resultData = [];

  for (let i = 0; i < 26; i += 2) {
    const project1 = forecastHiringData[i];
    const project2 = forecastHiringData[i + 1];

    const value = {
      fy: `${currentFinancialYear} (II)`,
      "Projects Involved":
        project1["No of Large scale projects"] +
        project1["No of medium and small scale projects"],
      "Projects Delivered": project1["No of projects delivered"],
      "Projects in Progress": project1["Projects in progress"],
    };

    resultData.push(value);

    resultData.push({
      fy: `${currentFinancialYear} (I)`,
      "Projects Involved":
        project2["No of Large scale projects"] +
        project2["No of medium and small scale projects"],
      "Projects Delivered": project2["No of projects delivered"],
      "Projects in Progress": project2["Projects in progress"],
    });
    currentFinancialYear--;
  }

  return resultData.reverse();
};

export default formattedProjects;
