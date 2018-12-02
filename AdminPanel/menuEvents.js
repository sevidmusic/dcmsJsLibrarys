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
