import {
    ArrowPathIcon,
} from "@heroicons/react/24/solid";

async function fetchData() {    
    try {
        //debugger;
        const response = await fetch("https://localhost:7210/api/dashboard/outdatedscans");        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error) {
            const response = await fetch("/data/outdatedscans.customization");
            const data = await response.json();
            return data;
        }
        console.error("Error fetching data:", error);
        return null;
    }
}
var data = await fetchData();
export const ordersOverviewData = data.map(s => ({
    icon: ArrowPathIcon,
    color: "text-blue-gray-300",
    "appGroup": s.appGroup,
    "totalApps": s.totalApps,
    "lastScanned": new Date(s.lastScanned).toLocaleDateString()
}));
export default ordersOverviewData;
