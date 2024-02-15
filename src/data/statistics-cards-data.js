import {
    ExclamationTriangleIcon,
    ExclamationCircleIcon,
    ArrowUpCircleIcon,
    ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";
//import config from "./jsconfig.json";
async function fetchData() {
    try {
        //debugger;
        const response = await fetch("https://localhost:7210/api/Dashboard/tiles");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

async function update_tiles_count() {
    const data = await fetchData();
    if (data) {
        statisticsCardsData[0].value = data.find(obj => obj.key === 'critical')?.count;
        statisticsCardsData[1].value = data.find(obj => obj.key === 'medium')?.count;
        statisticsCardsData[2].value = data.find(obj => obj.key === 'high')?.count;
        statisticsCardsData[3].value = data.find(obj => obj.key === 'low')?.count;
    }
}

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
await update_tiles_count();
export default statisticsCardsData;
