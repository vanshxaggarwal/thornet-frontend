import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import {
    EllipsisVerticalIcon,
    ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
    statisticsCardsData,
    statisticsChartsData,
    projectsTableData,
    ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
    return (
        <div className="mt-12 uppercase">
            <div className="mb-12 -ml-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
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
            <div className="mb-6 -ml-12 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                {statisticsChartsData.map((props) => (
                    <StatisticsChart
                        key={props.title}
                        {...props}
                        footer={
                            <Typography
                                variant="small"
                                className="flex items-center font-normal text-blue-gray-600"
                            >
                                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                                &nbsp;{props.footer}
                            </Typography>
                        }
                    />
                ))}
            </div>
            <div className="mb-4 -ml-12 grid grid-cols-1 gap-6 xl:grid-cols-3 overflow-hidden">
                <Card Style="height:25%" className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
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
                                <strong>{ projectsTableData.filter(s => new Date(s.finalDate).getMonth() == new Date().getMonth()).length } breaches</strong> this month
                            </Typography>
                        </div>
                        {/*<Menu placement="left-start">*/}
                        {/*    <MenuHandler>*/}
                        {/*        <IconButton size="sm" variant="text" color="blue-gray">*/}
                        {/*            <EllipsisVerticalIcon*/}
                        {/*                strokeWidth={3}*/}
                        {/*                fill="currenColor"*/}
                        {/*                className="h-6 w-6"*/}
                        {/*            />*/}
                        {/*        </IconButton>*/}
                        {/*    </MenuHandler>*/}
                        {/*    */}{/*<MenuList>*/}
                        {/*    */}{/*  <MenuItem>Action</MenuItem>*/}
                        {/*    */}{/*  <MenuItem>Another Action</MenuItem>*/}
                        {/*    */}{/*  <MenuItem>Something else here</MenuItem>*/}
                        {/*    */}{/*</MenuList>*/}
                        {/*</Menu>*/}
                    </CardHeader>
                    <CardBody className="overflow-auto px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    {["App Group", "Total Apps with impending breaches", "Days left for earliest breach", "Last Scanned On", "Nearest Date to breaches", "Severity",].map(
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
                                {projectsTableData.map(
                                    ({ groupName, count, days, last_scanned, finalDate, severity }, key) => {
                                        const className = `py-3 px-5 ${key === projectsTableData.length - 1
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
                                                        {/*<Typography*/}
                                                        {/*    variant="small"*/}
                                                        {/*    className="mb-1 block text-xs font-medium text-blue-gray-600"*/}
                                                        {/*>*/}
                                                        {/*    {completion}%*/}
                                                        {/*</Typography>*/}
                                                        {/*<Progress*/}
                                                        {/*    value={completion}*/}
                                                        {/*    variant="gradient"*/}
                                                        {/*    color={completion === 100 ? "green" : "blue"}*/}
                                                        {/*    className="h-1"*/}
                                                        {/*/>*/}
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
                                                        {finalDate}
                                                    </Typography>                                                    
                                                </td>
                                                <td className={className}>
                                                    <Typography
                                                        variant="small"
                                                        className={"text-xs font-medium " + severity == "critical" ? "text-red-500" : severity == "high" ? "text-yellow-500" : severity == "medium" ? "text-[#f5a623]" : "text-grey-500"}
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
                <Card Style="height:25%" className="border border-blue-gray-100 shadow-sm">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 p-6"
                    >
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Apps With Outdated Scans
                        </Typography>
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
                    <CardBody className="pt-0 overflow-y-scroll">
                        {ordersOverviewData.map(
                            ({ icon, color, appGroup, totalApps, lastScanned }, key) => (
                                <div key={appGroup} className="flex items-start gap-4 py-3">
                                    <div
                                        className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === ordersOverviewData.length - 1
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
            </div>
        </div>
    );
}

export default Home;
