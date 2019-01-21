"use strict";

function toggleDivsOffByClass(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function toggleDivsOnByClass(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
        element.style.position="absolute";
    }
}

function addToggleOnListener(id, event) {// @todo split into two methods, addToggleListenerByClass() and addToggleListenerById()
    document.getElementById(id).addEventListener(event, function () {
        toggleDivsOnByClass('dcms-admin-panel');
    });
}

function addToggleOffListener(id, event) {// @todo split into two methods, addToggleListenerByClass() and addToggleListenerById()
    document.getElementById(id).addEventListener(event, function () {
        toggleDivsOffByClass('dcms-admin-panel');
    });
}

addToggleOnListener('admin-panel-show-all-link', 'click');
addToggleOffListener('admin-panel-hide-all-link', 'click');

function showAppPanel(appName) {
    // hide others
    toggleDivsOffByClass('dcms-admin-panel');
    // show requested
    var element = document.getElementById(appName);
    element.style.display = "block";
    element.style.zIndex = "9999";
    element.style.width = "98%";
    element.style.height="72%";
    element.style.position="fixed";
    element.style.top="27px";
    element.style.left="10px";
    //element.style.="";
}

function hideAppPanel(appName) {
    var element = document.getElementById(appName);
    element.style.display = "none";
    element.style.zIndex = "0";
    element.style.position="absolute";
}

//showAppPanel('PHPMyAdminFrame');
