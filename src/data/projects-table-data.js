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
        if (error) {
            const response = await fetch("/data/potential_breache.customization");
            const data = await response.json();
            return data;
        }
    }
}
var data = await fetchData();

export const projectsTableData = data.map(s => ({
    "groupName": s.group_name,
    "count": s.total_app,
    "days": s.num_of_days,
    "severity": s.severity,
    "last_scanned": new Date(s.last_scanned).toLocaleDateString(),
    "finalDate": new Date(s.last_scanned).addDays(((s.severity == 'critical') ? 15
        : (s.severity == 'high') ? 30
            : (s.severity == 'medium') ? 45 : 90)).toString(),
})).filter(s => new Date(s.finalDate) >= Date.now());

export default projectsTableData;