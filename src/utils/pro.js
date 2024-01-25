import formattedProjects from "./projectUtil";
console.log(formattedProjects());

const calculateProjectMetrics = () => {
  var projectData = formattedProjects();
  var len = projectData.length;
  const currentYearData = projectData[len - 1];

  const previousYearData = projectData[len - 2];

  console.log(currentYearData, previousYearData);

  // Calculate projects in progress for this second half of the current year
  const currentProjectsInProgress = currentYearData["Projects in Progress"];

  const totalProjectsInvolved = projectData.reduce(
    (accumulator, entry) => accumulator + (entry["Projects Involved"] || 0),
    0
  );

  const totalProjectsDelivered = projectData.reduce(
    (accumulator, entry) => accumulator + (entry["Projects Delivered"] || 0),
    0
  );

  const currentProjectsRatio = (
    currentYearData["Projects Delivered"] / currentYearData["Projects Involved"]
  ).toFixed(2);

  // Calculate required metrics for the previous year (2022 (I))
  const prevProjectsRatio = (
    previousYearData["Projects Delivered"] /
    previousYearData["Projects Involved"]
  ).toFixed(2);

  // Calculate percent change of project ratio from the previous half
  const percentChange = (
    ((currentProjectsRatio - prevProjectsRatio) / prevProjectsRatio) *
    100
  ).toFixed(2);
  // Return the calculated metrics
  return {
    currentYear: projectData[len - 1]["fy"],
    prevYear: projectData[len - 2]["fy"],
    projectsInProgress: currentProjectsInProgress,
    totalProjectsInvolved: totalProjectsInvolved,
    totalProjectsDelivered: totalProjectsDelivered,
    currentProjectsRatio: currentProjectsRatio,
    prevProjectsRatio: prevProjectsRatio,
    percentChange: percentChange,
  };
};

export default calculateProjectMetrics;
