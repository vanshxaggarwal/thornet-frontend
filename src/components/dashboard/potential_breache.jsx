import React, { useState, useEffect } from 'react';
import {
    Typography,
    Card,
    CardHeader,
    CardBody
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";



export const PotentialBreache = () => {
    const [potential_data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {            
            try {
                const response = await fetch("https://localhost:7210/api/Dashboard/potential_breache");
                const data = (await response.json()).map(s => ({
                    "groupName": s.group_name,
                    "count": s.total_app,
                    "days": s.num_of_days,
                    "severity": s.severity,
                    "last_scanned": new Date(s.last_scanned).toLocaleDateString(),
                    "finalDate": new Date(s.last_scanned).addDays(((s.severity == 'critical') ? 15
                        : (s.severity == 'high') ? 30
                            : (s.severity == 'medium') ? 45 : 90)).toString(),
                })).filter(s => new Date(s.finalDate) >= Date.now());
                setData(data);
            } catch (error) {
                const response = await fetch("/data/potential_breache.customization");
                const data = (await response.json()).map(s => ({
                    "groupName": s.group_name,
                    "count": s.total_app,
                    "days": s.num_of_days,
                    "severity": s.severity,
                    "last_scanned": new Date(s.last_scanned).toLocaleDateString(),
                    "finalDate": new Date(s.last_scanned).addDays(((s.severity == 'critical') ? 15
                        : (s.severity == 'high') ? 30
                            : (s.severity == 'medium') ? 45 : 90)).toString(),
                })).filter(s => new Date(s.finalDate) >= Date.now());
                setData(data);                
            }            
        };

        fetchData();
    }, []);
    return (
        <Card className={potential_data == null ? "animate-pulse overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm h-[550px]" : "overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm h-[550px]"}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
            >
                <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        Potential Breaches
                    </Typography>
                    <Typography
                        variant="small"
                        className="flex items-center gap-1 font-normal text-blue-gray-600"
                    >
                        <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                        <strong>{potential_data && potential_data.filter(s => new Date(s.finalDate).getMonth() == new Date().getMonth()).length} breaches</strong> this month
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="overflow-auto px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            {["App Group", "Total Apps with impending breaches", "Days left for earliest breach", "Detection Date", "Nearest Date to breaches", "Severity",].map(
                                (el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-medium uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {potential_data && potential_data.map(
                            ({ groupName, count, days, last_scanned, finalDate, severity }, key) => {
                                const className = `py-3 px-5 ${key === potential_data.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                                    }`;

                                return (
                                    <tr key={groupName}>
                                        <td className={className}>
                                            <div className="flex items-center gap-4">
                                                <Typography
                                                    variant="small"
                                                    className="text-xs font-medium text-blue-gray-600"
                                                >
                                                    {groupName}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {count}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <div className="w-10/12">
                                                <Typography
                                                    variant="small"
                                                    className="text-xs font-medium text-blue-gray-600"
                                                >
                                                    {days}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {last_scanned}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {new Date(finalDate).toLocaleDateString()}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className={severity == "critical" ? "text-xs font-medium text-red-500" : severity == "high" ? "text-xs font-medium text-[#35a0da]" : severity == "medium" ? "text-xs font-medium text-[#f5a623]" : "text-xs font-medium text-[#50aa54]"}
                                            >
                                                {severity}
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
    )
}
//PotentialBreache.propTypes = {};

//PotentialBreache.defaultProps = {};

export default PotentialBreache;
