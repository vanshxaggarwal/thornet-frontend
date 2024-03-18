import React, { useState, useEffect } from 'react';
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Input
} from "@material-tailwind/react";
import {
    ArrowUpIcon, ArrowPathIcon
} from "@heroicons/react/24/outline";
import { app_config } from "@/configs";
export const OutdatedScans = () => {
    const [outdatedscandata, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = outdatedscandata.filter(str => str.appGroup.toLowerCase().includes(searchTerm.toLowerCase()));   
    const handleSearch = (e) => {             
        setSearchTerm(e.target.value)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {                
                const fetch_url = (app_config.use_json == false) ? app_config.api_base + "/api/Dashboard/outdatedscans" : "/data/outdatedscans.customization"
                const response = await fetch(fetch_url);

                const data = (await response.json()).map(s => ({
                    icon: ArrowPathIcon,
                    color: "text-blue-gray-300",
                    "appGroup": s.appGroup,
                    "totalApps": s.totalApps,
                    "lastScanned": new Date(s.lastScanned).toLocaleDateString()
                }));
                setData(data);
            } catch (error) {              
            }
        };
        fetchData();
    }, []);
    return (
        <Card className="border border-blue-gray-100 shadow-sm h-[550px] block">          
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 p-4"
            >    <Input label="Apps With OutDated Scans" value={searchTerm} onChange={handleSearch} />          
                <Typography
                    variant="small"
                    className="flex items-center gap-1 font-normal text-blue-gray-600"
                >
                    <ArrowUpIcon
                        strokeWidth={3}
                        className="h-3.5 w-3.5 text-green-500"
                    />
                    <strong>24%</strong> of total apps
                </Typography>
            </CardHeader>
            <CardBody className="pt-0 overflow-y-scroll h-[435px] ">
                {filteredData && filteredData.map(
                    ({ icon, color, appGroup, totalApps, lastScanned }, key) => (
                        <div key={appGroup} className="flex items-start gap-4 py-3">
                            <div
                                className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === outdatedscandata.length - 1
                                    ? "after:h-0"
                                    : "after:h-4/6"
                                    }`}
                            >
                                {React.createElement(icon, {
                                    className: `!w-5 !h-5 ${color}`,
                                })}
                            </div>
                            <div>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium text-blue-gray-600 text-[12px]"
                                >
                                    {appGroup} | {totalApps}
                                </Typography>
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-small text-blue-gray-600 text-[12px]"
                                >
                                    Last Scanned - {lastScanned}
                                </Typography>
                            </div>
                        </div>
                    )
                )}
            </CardBody>
        </Card>
    );
}
export default OutdatedScans;