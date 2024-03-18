import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
} from "@material-tailwind/react";
import { authorsTableData , } from "@/data";

export const Tables = () => {
    const [AppGrpData, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://localhost:7210/api/Application/AppGroupComplianceData");                
                const data = (await response.json()).map(s => ({
                    "GroupName": s.group_name,
                    "AppCount": s.app_count + " Apps",
                    "severity": ["critical", "high", "medium", "low"],
                    "status": [s.critical, s.high, s.medium, s.low],
                    "sla_status": "Within SLA",               
                    "Last_scanned_date": new Date(s.last_scan_date).toLocaleDateString()
                }));
                debugger;
                data.sort((a, b) => b.count - a.count); // sort by descending App Count 
                setData(data);
            }
            catch{
                console.log("Error fetching AppGrp Compliance Data");
            }
        };
        fetchData();
    }, []);
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Complaince Status
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["App Group", "Vulnerabilities", "status", "last scanned", ""].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {AppGrpData && AppGrpData.map(
                                ({ GroupName, AppCount, status, sla_status, severity, Last_scanned_date }, key) => {
                                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                                            ? ""
                                            : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={GroupName}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-semibold"
                                                        >
                                                            {GroupName}
                                                        </Typography>
                                                        <Typography className="text-xs font-normal text-blue-gray-500">
                                                            {AppCount}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    <table>
                                                        <tr>
                                                            <td className="align-bottom">
                                                                <div className={severity[0]} style={{ height: status[0] }}>
                                                                    <div className="text-botton">
                                                                        {status[0]}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="align-bottom">
                                                                <div className={severity[1]} style={{ height: status[1] }}>
                                                                    <div className="text-botton">
                                                                        {status[1]}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="align-bottom">
                                                                <div className={severity[2]} style={{ height: status[2] }}>
                                                                    <div className="text-botton">
                                                                        {status[2]}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="align-bottom">
                                                                <div className={severity[3]} style={{ height: status[3] }}>
                                                                    <div className="text-botton">
                                                                        {status[3]}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Chip
                                                    variant="gradient"
                                                    color={sla_status ? "green" : "red"}
                                                    value={sla_status ? "Within SLA" : "SLA Breached"}
                                                    className="py-0.5 px-2 text-[11px] font-medium w-fit"
                                                />
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {Last_scanned_date}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    className="text-xs font-semibold text-blue-gray-600"
                                                >
                                                    Details
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default Tables;
