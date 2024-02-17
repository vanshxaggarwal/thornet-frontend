Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

Date.prototype.remainingDays = function (targetDate) {
    var today = this;
    var difference = targetDate.getTime() - today.getTime();
    var remainingDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return remainingDays;
};
async function fetchData() {
    try {
        //debugger;
        const response = await fetch("https://localhost:7210/api/Dashboard/potential_breache");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
var data = await fetchData();

export const projectsTableData = data.map(s => ({
    "groupName": s.group_name,
    "count": s.total_app,
    "days": s.num_of_days,
    "severity": s.severity,
    "last_scanned": new Date(s.last_scanned).toLocaleDateString(),
    "finalDate": new Date(s.last_scanned).addDays(((s.severity == 'critical') ? 30
        : (s.severity == 'high') ? 60
            : (s.severity == 'medium') ? 90 : 180)).toLocaleDateString(),
})).filter(s => new Date(s.finalDate) >= Date.now());

export default projectsTableData;

//data.map(s => ({
//    "groupName": s.group_name,
//    "count": s.total_app,
//    "days": s.num_of_days,
//    "severity": s.severity,
//    "last_scanned": s.last_scanned,
//    "remaining_num_of_days": ((s.severity == 'critical') ? 7
//        : (s.severity == 'high') ? 14
//            : (s.severity == 'medium') ? 30 : 90)
//}));