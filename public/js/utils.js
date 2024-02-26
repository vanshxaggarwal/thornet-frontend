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