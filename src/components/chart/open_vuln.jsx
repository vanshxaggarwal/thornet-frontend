import {
  Typography
} from "@material-tailwind/react";
import { chartsConfig } from "@/configs";
import { StatisticsChart } from "@/widgets/charts";
import React, { useState, useEffect } from 'react';
export const OpenVuln = () => {
  const [chartData, setData] = useState(false);
  useEffect(() => {      
      async function fetchData() {          
          try {
              const response = await fetch("https://localhost:7210/api/Dashboard/opened");
              const data = await response.json();
              const mappeddata = [{
                  color: "white",
                  title: "OPEN VULNERABILITY TREND",
                  description: "OPEN VULNERABILITY TREND",
                  footer: "updated 8 min ago",
                  chart: {
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
                          colors: ["#388e3c"],
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
                  },
              }]
              setData(mappeddata);
          } catch (error) {
              if (error) {
                  const response = await fetch("/data/opened.customization");
                  const data = await response.json();
                  const mappeddata = [{
                      color: "white",
                      title: "SLA",
                      description: "Open Vulnerability Trend",
                      footer: "updated 8 min ago",
                      chart: {
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
                              colors: ["#388e3c"],
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
                      },
                  }]
                  setData(mappeddata);
              }
          }
      }
      fetchData();       
  }, []);
  return (      
      <div>
          {chartData && chartData.map((props) => (
              <StatisticsChart
                  key={props.title}
                  {...props}
                  footer={
                      <Typography
                          variant="small"
                          className="block items-center font-normal text-blue-gray-600"
                      >
                          <span className="flex float-left">{props.description}</span>
                          {/*<span className="flex float-right"><ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />*/}
                          {/*    &nbsp;{props.footer}</span>*/}
                      </Typography>
                  }
              />
          ))}
      </div>
  )
}
export default OpenVuln;
