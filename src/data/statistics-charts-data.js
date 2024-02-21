import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 300,
  series: [
    {
          name: "Vulnerabilities",
          data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
        categories: ["AUG-2023", "SEP-2023", "OCT-2023", "NOV-2023", "DEC-2023", "JAN-2024", "FEB-2024"],
    },
  },
};
async function fetchData() {
    try {
        //debugger;
        const response = await fetch("https://localhost:7210/api/Dashboard/resolved");
        const data = await response.json();
        return data;
        //return a;
        //return { "data": a, "cache_time": response.headers.get('date') };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
var data = await fetchData();
const dailySalesChart = {
  type: "line",
  height: 300,
  series: [
    {
          name: "Vulnerabilities",
          data: data.map(s => s.total),
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
        categories: data.map(s => s.month),
    },
  },
};

async function fetchData2() {
    try {
        //debugger;
        const response = await fetch("https://localhost:7210/api/Dashboard/opened");
        const data = await response.json();
        return data;
        //return { "data": a, "cache_time": response.headers.get('date') };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
var data2 = await fetchData2();
const completedTaskChart = {
  type: "line",
  height: 300,
  series: [
    {
          name: "Vulnerabilities",
          data: data2.map(s=>s.total),
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
        ...chartsConfig.xaxis,
        categories: data2.map(s => s.month),
    },
  },
};
const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
          name: "Vulnerabilities",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};
export const statisticsChartsData = [
    {
        color: "white",
        title: "SLA",
        description: "SLA Compliance Trend",
        footer: "updated 8 min ago",
        chart: websiteViewsChart,
    },
    {
        color: "white",
        title: "Open",
        description: "Open Vulnerability Trend",
        footer: "updated 4 min ago", //new Date(data.cache_time).timeAgo(),
        chart: dailySalesChart,
    },
    {
        color: "white",
        title: "Resolved",
        description: "Closed Vulnerability Trend",
        footer: "just updated",
        chart: completedTasksChart,
    },
];

export default statisticsChartsData;
