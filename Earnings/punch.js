function earningsPunch() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("Earnings").innerHTML = this.responseText; // @todo: Should use earningsMsg
        }
    };
    var params = 'ajaxRequest=true';
    contentType = "application/x-www-form-urlencoded";
    xmlhttp.open("POST", "apps/Earnings/ajax/punch.php", true);
    xmlhttp.setRequestHeader("Content-type", contentType);
    xmlhttp.send(params);
}
