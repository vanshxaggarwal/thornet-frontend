import React, { useState, useEffect } from 'react';
import {
    Typography
} from "@material-tailwind/react";
import {
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
export const Tiles = () => {    
    const [tilesData, setData] = useState(false);
    useEffect(() => {
        const data2 = [
            {
                
                color: "red",
                icon: ExclamationTriangleIcon,
                title: "Critical",                
                footer: {
                    color: "text-green-500",
                    value: "+1%",
                    label: "than last week",
                },
            },
            {
                color: "orange",
                icon: ExclamationTriangleIcon,
                title: "High",                
                footer: {
                    color: "text-green-500",
                    value: "+3%",
                    label: "than last week",
                },
            },
            {
                color: "amber",
                icon: ExclamationTriangleIcon,
                title: "Medium",
                footer: {
                    color: "text-red-500",
                    value: "-2%",
                    label: "than last week",
                },
            },
            {
                color: "green",
                icon: ExclamationTriangleIcon,
                title: "Low",                
                footer: {
                    color: "text-green-500",
                    value: "+5%",
                    label: "than last week",
                },
            }
        ];
        async function update_tiles_count(data) {            
            if (data) {
                data2[0].value = data.find(obj => obj.key === 'critical')?.count;
                data2[1].value = data.find(obj => obj.key === 'high')?.count;
                data2[2].value = data.find(obj => obj.key === 'medium')?.count;               
                data2[3].value = data.find(obj => obj.key === 'low')?.count;
            }
        }        
        const fetchData = async () => {
            try {
                let url = "https://localhost:7210/api/Dashboard/tiles";
                const response = await fetch((JSON.parse(localStorage.getItem("isProd")) ? url + "?branch=main%2Cmaster" : url));
                const data = await response.json();
                await update_tiles_count(data);
                setData(data2);
            } catch (error) {
                const response = await fetch("/data/tiles.customization");
                const data = await response.json();
                await update_tiles_count(data);
                setData(data2);
                //  console.error('Error fetching data:', error);
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
//Tiles.propTypes = {};

//Tiles.defaultProps = {};

export default Tiles;
