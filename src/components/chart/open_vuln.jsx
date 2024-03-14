import {
  Typography
} from "@material-tailwind/react";
import { chartsConfig, app_config } from "@/configs";
import { StatisticsChart } from "@/widgets/charts";
import React, { useState, useEffect } from 'react';
export const OpenVuln = () => {
    const [chartData, setData] = useState(false);    
  useEffect(() => {      
      async function fetchData() {          
          try {
              const fetch_url = (app_config.use_json == false) ? app_config.api_base + "/api/Dashboard/opened" : "/data/opened.customization"
              const response = await fetch(fetch_url);
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
