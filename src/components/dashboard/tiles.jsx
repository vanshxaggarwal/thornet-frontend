import React, { useState, useEffect } from 'react';
import {
    Typography
} from "@material-tailwind/react";
import {
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { app_config } from "@/configs";
export const Tiles = () => {    
    const [tilesData, setData] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = (app_config.use_json == false) ? app_config.api_base + "/api/Dashboard/tiles" : "/data/tiles.customization"
                const response = await fetch((JSON.parse(localStorage.getItem("isProd")) ? url + "?branch=main%2Cmaster" : url));
                const data = (await response.json()).map(s => {
                    const colorMap = {
                        'critical': 'red',
                        'high': 'orange',
                        'medium': 'amber',
                        'default': 'green'
                    };

                    const titleMap = {
                        'critical': 'Critical',
                        'high': 'High',
                        'medium': 'Medium',
                        'default': 'Low'
                    };

                    const color = colorMap[s.key] || colorMap['default'];
                    const title = titleMap[s.key] || titleMap['default'];

                    return {
                        color: color,
                        icon: ExclamationTriangleIcon,
                        title: title,
                        value: s.count,
                        footer: {
                            color: (s.count > 0) ? "text-red-500" : "text-green-500",
                            value: (((s.count - s.prev_count) / s.count) * 100).toFixed(1) + "%",
                            label: "than last month",
                        }
                    };
                });
                setData(data);
            } catch (error) {
            }
        };
        fetchData();
    }, []);
    return (
        <div className={tilesData == null ? "animate-pulse mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4" : "mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4"} >
            {tilesData && tilesData.map(({ icon, title, footer, ...rest }) => (
                <StatisticsCard
                    key={title}
                    {...rest}
                    title={title}
                    icon={React.createElement(icon, {
                        className: "w-6 h-6 text-white",
                    })}
                    footer={
                        <Typography className="font-normal text-blue-gray-600">
                            <strong className={footer.color}>{footer.value}</strong>
                            &nbsp;{footer.label}
                        </Typography>
                    }
                />
            ))}
        </div> 
    )
}
export default Tiles;
