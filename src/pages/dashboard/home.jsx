import React, { useState, useEffect } from 'react';
//import { PotentialBreache } from "@/pages/dashboard";
import { PotentialBreache } from "@/components/dashboard/potential_breache";
import { OutdatedScans } from "@/components/dashboard/outdatedscans"
import { Tiles } from "@/components/dashboard/tiles"
import {
    Typography
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {   
    statisticsChartsData    
} from "@/data";
import { ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
    return (
        <div>
            <div className="mt-12 uppercase">                
                <Tiles/>
                <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                    {statisticsChartsData.map((props) => (
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
                     
                <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3 overflow-hidden">
                    <PotentialBreache/>
                    <OutdatedScans/>
                </div>
            </div>
        </div>
    );
}

export default Home;