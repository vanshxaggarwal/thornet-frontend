import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";

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
                                ({ img, name, email, job, status, online, date }, key) => {
                                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                                            ? ""
                                            : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={name}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    {/* <Avatar src={img} alt={name} size="sm" variant="rounded" />*/}
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
                                                    {/*<div className="inline-flex">*/}
                                                    {/*    <div className={job[0]}>{status[0]}</div>*/}
                                                    {/*    <div className={job[1]}>{status[1]}</div>*/}
                                                    {/*    <div className={job[2]}>{status[2]}</div>*/}
                                                    {/*    <div className={job[3]}>{status[3]}</div>*/}
                                                    {/*</div>*/}
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
                                                {/*<Typography className="text-xs font-normal text-blue-gray-500">*/}
                                                {/*          {status[0]}, { status[1]}, {status[2]}, {status[3]}*/}
                                                {/*</Typography>*/}
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
            {/*<Card>*/}
            {/*  <CardHeader variant="gradient" color="gray" className="mb-8 p-6">*/}
            {/*    <Typography variant="h6" color="white">*/}
            {/*      Projects Table*/}
            {/*    </Typography>*/}
            {/*  </CardHeader>*/}
            {/*  <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">*/}
            {/*    <table className="w-full min-w-[640px] table-auto">*/}
            {/*      <thead>*/}
            {/*        <tr>*/}
            {/*          {["companies", "members", "budget", "completion", ""].map(*/}
            {/*            (el) => (*/}
            {/*              <th*/}
            {/*                key={el}*/}
            {/*                className="border-b border-blue-gray-50 py-3 px-5 text-left"*/}
            {/*              >*/}
            {/*                <Typography*/}
            {/*                  variant="small"*/}
            {/*                  className="text-[11px] font-bold uppercase text-blue-gray-400"*/}
            {/*                >*/}
            {/*                  {el}*/}
            {/*                </Typography>*/}
            {/*              </th>*/}
            {/*            )*/}
            {/*          )}*/}
            {/*        </tr>*/}
            {/*      </thead>*/}
            {/*      <tbody>*/}
            {/*        {projectsTableData.map(*/}
            {/*          ({ img, name, members, budget, completion }, key) => {*/}
            {/*            const className = `py-3 px-5 ${*/}
            {/*              key === projectsTableData.length - 1*/}
            {/*                ? ""*/}
            {/*                : "border-b border-blue-gray-50"*/}
            {/*            }`;*/}

            {/*            return (*/}
            {/*              <tr key={name}>*/}
            {/*                <td className={className}>*/}
            {/*                  <div className="flex items-center gap-4">*/}
            {/*                    <Avatar src={img} alt={name} size="sm" />*/}
            {/*                    <Typography*/}
            {/*                      variant="small"*/}
            {/*                      color="blue-gray"*/}
            {/*                      className="font-bold"*/}
            {/*                    >*/}
            {/*                      {name}*/}
            {/*                    </Typography>*/}
            {/*                  </div>*/}
            {/*                </td>*/}
            {/*                <td className={className}>*/}
            {/*                  {members.map(({ img, name }, key) => (*/}
            {/*                    <Tooltip key={name} content={name}>*/}
            {/*                      <Avatar*/}
            {/*                        src={img}*/}
            {/*                        alt={name}*/}
            {/*                        size="xs"*/}
            {/*                        variant="circular"*/}
            {/*                        className={`cursor-pointer border-2 border-white ${*/}
            {/*                          key === 0 ? "" : "-ml-2.5"*/}
            {/*                        }`}*/}
            {/*                      />*/}
            {/*                    </Tooltip>*/}
            {/*                  ))}*/}
            {/*                </td>*/}
            {/*                <td className={className}>*/}
            {/*                  <Typography*/}
            {/*                    variant="small"*/}
            {/*                    className="text-xs font-medium text-blue-gray-600"*/}
            {/*                  >*/}
            {/*                    {budget}*/}
            {/*                  </Typography>*/}
            {/*                </td>*/}
            {/*                <td className={className}>*/}
            {/*                  <div className="w-10/12">*/}
            {/*                    <Typography*/}
            {/*                      variant="small"*/}
            {/*                      className="mb-1 block text-xs font-medium text-blue-gray-600"*/}
            {/*                    >*/}
            {/*                      {completion}%*/}
            {/*                    </Typography>*/}
            {/*                    <Progress*/}
            {/*                      value={completion}*/}
            {/*                      variant="gradient"*/}
            {/*                      color={completion === 100 ? "green" : "gray"}*/}
            {/*                      className="h-1"*/}
            {/*                    />*/}
            {/*                  </div>*/}
            {/*                </td>*/}
            {/*                <td className={className}>*/}
            {/*                  <Typography*/}
            {/*                    as="a"*/}
            {/*                    href="#"*/}
            {/*                    className="text-xs font-semibold text-blue-gray-600"*/}
            {/*                  >*/}
            {/*                    <EllipsisVerticalIcon*/}
            {/*                      strokeWidth={2}*/}
            {/*                      className="h-5 w-5 text-inherit"*/}
            {/*                    />*/}
            {/*                  </Typography>*/}
            {/*                </td>*/}
            {/*              </tr>*/}
            {/*            );*/}
            {/*          }*/}
            {/*        )}*/}
            {/*      </tbody>*/}
            {/*    </table>*/}
            {/*  </CardBody>*/}
            {/*</Card>*/}
        </div>
    );
}

export default Tables;
