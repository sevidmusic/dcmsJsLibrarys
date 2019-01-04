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
        elements[i].style.border = "none";
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
}

function hideAppPanel(appName) {
    var element = document.getElementById(appName);
    element.style.display = "none";
    element.style.zIndex = "0";
}

//showAppPanel('PHPMyAdminFrame');
