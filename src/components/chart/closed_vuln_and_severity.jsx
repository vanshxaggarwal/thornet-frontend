import {
  Typography
} from "@material-tailwind/react";
import { chartsConfig, app_config } from "@/configs";
import { StatisticsChart } from "@/widgets/charts";
import React, { useState, useEffect } from 'react';
export const ResolvedVulnAndSeverity = () => {
    const [chartData, setData] = useState(false);    
  useEffect(() => {      
      async function fetchData() {          
          try {
              let fetch_url = (app_config.use_json == false) ? app_config.api_base + "/api/Dashboard/closed_trend_severity" : "/data/opened.customization"
              const response = await fetch((JSON.parse(localStorage.getItem("isProd")) ? fetch_url + "?branch=main%2Cmaster" : fetch_url));            
              const data = await response.json();
              const mappeddata = [{
                  color: "white",
                  title: "Resolved VULNERABILITY TREND",
                  description: "Resolved VULNERABILITY TREND",
                  footer: "updated 8 min ago",
                  chart: {
                      type: "line",
                      height: 400,
                      zoom: {
                          type: 'x',
                          enabled: true,
                          autoScaleYaxis: true
                      },
                      toolbar: {
                          autoSelected: 'zoom'
                      },
                      series: [
                          {                              
                              name: "total",
                              data: data.map(s => s.total),
                          },
                          {
                              name: "critical",
                              data: data.map(s => s.critical),
                          },
                          {
                              name: "high",
                              data: data.map(s => s.high),
                          },
                          {
                              name: "medium",
                              data: data.map(s => s.medium),
                          },
                          {
                              name: "low",
                              data: data.map(s => s.low)
                          }
                      ],
                      options: {
                          ...chartsConfig,
                          colors: ['black', '#ef5350', '#ffa726', '#ffca28', '#66bb6a'],              
                          title: {
                              text: 'RESOLVED VULNERABILITY TREND',
                              align: 'left'
                          },
                          stroke: {
                              //lineCap: "round",
                              curve: 'smooth'
                          },
                          markers: {
                              size: 5,
                          },
                          xaxis: {
                              ...chartsConfig.xaxis,
                              categories: data.map(s => s.month),
                          }
                      }                      
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
                  //footer={
                  //    <Typography
                  //        variant="small"
                  //        className="block items-center font-normal text-blue-gray-600"
                  //    >
                  //        <span className="flex float-left">{props.description}</span>
                  //        {/*<span className="flex float-right"><ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />*/}
                  //        {/*    &nbsp;{props.footer}</span>*/}
                  //    </Typography>
                  //}
              />
          ))}
      </div>
  )
}
export default ResolvedVulnAndSeverity;
