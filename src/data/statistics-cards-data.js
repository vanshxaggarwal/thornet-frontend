import {
    ExclamationTriangleIcon,
    ExclamationCircleIcon,
    ArrowUpCircleIcon,
    ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
    {
        color: "red",
        icon: ExclamationTriangleIcon,
        title: "Critical",
        value: "2312",
        footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
        },
    },
    {
        color: "orange",
        icon: ArrowUpCircleIcon,
        title: "High",
        value: "5,300",
        footer: {
            color: "text-green-500",
            value: "+3%",
            label: "than last month",
        },
    },
    {
        color: "amber",
        icon: ExclamationCircleIcon,
        title: "Medium",
        value: "462",
        footer: {
            color: "text-red-500",
            value: "-2%",
            label: "than yesterday",
        },
    },
    {
        color: "green",
        icon: ArrowDownCircleIcon,
        title: "Low",
        value: "10430",
        footer: {
            color: "text-green-500",
            value: "+5%",
            label: "than yesterday",
        },
    }
];

export default statisticsCardsData;
