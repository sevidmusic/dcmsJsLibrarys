function formatAMPM(hours, minutes, seconds) {
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours !== 0 ? hours : 12; // the hour '0' should be '12'
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementById('earningsClock').innerHTML =
        formatAMPM(h, m, s);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

document.addEventListener("load", startTime, true);
