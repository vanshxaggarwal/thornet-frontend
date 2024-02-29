import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";

export function Tables() {
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
                            {authorsTableData.map(
                                ({ name, email, job, status, online, date }, key) => {
                                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                                            ? ""
                                            : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={name}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-semibold"
                                                        >
                                                            {name}
                                                        </Typography>
                                                        <Typography className="text-xs font-normal text-blue-gray-500">
                                                            {email}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    <table>
                                                        <tr>
                                                            <td Style="vertical-align: bottom;">
                                                                <div className={job[0]} style={{ height: status[0] }}>
                                                                    <div className="text-botton">
                                                                        {status[0]}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td Style="vertical-align: bottom;">
                                                                <div className={job[1]} style={{ height: status[1] }}>
                                                                    <div className="text-botton">
                                                                        {status[1]}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td Style="vertical-align: bottom;">
                                                                <div className={job[2]} style={{ height: status[2] }}>
                                                                    <div className="text-botton">
                                                                        {status[2]}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td Style="vertical-align: bottom;">
                                                                <div className={job[3]} style={{ height: status[3] }}>
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
                                                    color={online ? "green" : "red"}
                                                    value={online ? "Within SLA" : "SLA Breached"}
                                                    className="py-0.5 px-2 text-[11px] font-medium w-fit"
                                                />
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {date}
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
