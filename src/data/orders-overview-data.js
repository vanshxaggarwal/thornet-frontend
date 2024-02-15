import {
    ArrowPathIcon,
} from "@heroicons/react/24/solid";

async function fetchData() {
    try {
        debugger;
        const response = await fetch("https://localhost:7210/api/dashboard/outdatedscans");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
var data = await fetchData();
export const ordersOverviewData = data.map(s => ({
    icon: ArrowPathIcon,
    color: "text-blue-gray-300",
    "appName": s.appName,
    "lastScanned": s.lastScanned
}));
//    [
//  {
//    icon: ArrowPathIcon,
//    color: "text-blue-gray-300",
//    appName: "StudyKik_API_JS",
//    lastScanned: "22 DEC 7:20 PM"
//  }
//];


export default ordersOverviewData;
