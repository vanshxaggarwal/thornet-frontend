import {
    Typography
} from "@material-tailwind/react";
import { chartsConfig } from "@/configs";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";

import React, { useState, useEffect } from 'react';
export const OpenVuln = () => {
    const [chartData, setData] = useState(false);
    useEffect(() => {
        let data = [];
        async function fetchData() {
            try {
                const response = await fetch("https://localhost:7210/api/Dashboard/resolved");
                data = await response.json();
                data = [{
                    color: "white",
                    title: "SLA",
                    description: "SLA Compliance Trend",
                    footer: "updated 8 min ago",
                    chart: {
                        type: "line",
                        height: 300,
                        series: [
                            {
                                name: "Vulnerabilities",
                                data: chartData.map(s => s.total),
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
                                categories: chartData.map(s => s.month),
                            },
                        },
                    },
                }]
                setData(data);
            } catch (error) {
                if (error) {
                    const response = await fetch("/data/resolved.customization");
                    data = await response.json();
                    data = [{
                        color: "white",
                        title: "SLA",
                        description: "SLA Compliance Trend",
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
                        },
                    }]
                    setData(data);
                }
            }
        }
        fetchData();       
    }, []);
    return (      
        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
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
                            <span className="flex float-right"><ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                                &nbsp;{props.footer}</span>
                        </Typography>
                    }
                />
            ))}
        </div>
    )
}
export default OpenVuln;
