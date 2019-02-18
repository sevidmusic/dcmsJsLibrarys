function AjaxRouterRequest(issuingApp, handlerName, outputElementId, requestType, contentType, additionalParams, ajaxDirName, callFunction, callContext, callArgs) {
    if (typeof issuingApp === "undefined") {
        issuingApp = "AjaxRouterTester";
    }
    if (typeof handlerName === "undefined") {
        handlerName = "defaultRequest";
    }
    if (typeof outputElementId === "undefined") {
        outputElementId = "AjaxOutput";
    }
    if (typeof requestType === "undefined") {
        requestType = "GET";
    }
    if (typeof contentType === "undefined") {
        contentType = "application/x-www-form-urlencoded";
    }
    if (typeof additionalParams === "undefined") {
        additionalParams = "";
    }
    if (typeof ajaxDirName === "undefined") {
        ajaxDirName = "ajax";
    }
    if (typeof callFunction === "undefined") {
        callFunction = "testAjaxFunctionCall";
    }
    if (typeof callContext === "undefined") {
        callContext = window;
    }
    if (typeof callArgs === "undefined") {
        callArgs = ['arg1', 'arg2'];
    }
    var handlerPath = "apps/" + issuingApp + "/" + ajaxDirName + "/" + handlerName + ".php";
    var params = "ajaxRequest=true&issuingApp=" + issuingApp + "&handlerName=" + handlerName + "&" + additionalParams;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(outputElementId).innerHTML = this.responseText;
            AjaxFunctionCall(callFunction, callContext, callArgs);
        }
    };
    if (requestType === "POST") {
        xmlhttp.open("POST", handlerPath, true);
        xmlhttp.setRequestHeader("Content-type", contentType);
        xmlhttp.send(params);
    }
    if (requestType === "GET") {
        xmlhttp.open("GET", handlerPath + "?" + params, true);
        xmlhttp.send();
    }
    console.log("Ajax Request routed by AjaxRouter | issuingApp: " + issuingApp + " | handlerName: " + handlerName + " | outputElementId: " + outputElementId + " | requestType: " + requestType + " | contentType: " + contentType + " | additionalParams: " + additionalParams + " | ajaxDirName: " + ajaxDirName + " | callFunction  : " + callFunction + " | callContext : Cannot Determine | callArgs : " + callArgs);
    // return false so elements that use this in their onclick method, particularly <a> tags, do not follow link but use ajax instead... @see https://stackoverflow.com/questions/1607865/is-it-possible-to-stop-the-browser-from-following-the-link-when-the-onclick-of-t
    return false;
}

/**
 * Calls a function by its name as a string.
 * @param functionName The name of the function to call.
 * @param context The context to call from, e.g.: window, document, etc.
 * @param args Array of arguments to pass to the function.
 * @returns {*}
 * @see https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
 */
function AjaxFunctionCall(functionName, context, args) {
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

/**
 * Test function called by default whenever an Ajax request is made via AjaxRouterRequest() and the callFunction
 * parameter is not defined.
 * @param arg1 Test argument 1.
 * @param arg2 Test argument 2.
 */
function testAjaxFunctionCall(arg1, arg2) {
    console.log('Ajax Router Request callFunction parameter is working. Arguments: ' + arg1 + ' | ' + arg2);
}

/**
 * Get the value of a specified element.
 * @param elementId The id of the element whose value should be returned.
 * @returns {string}
 */
function getElementValue(elementId) {
    return document.getElementById(elementId).value;
}

/**
 * Determines if the specified checkbox is checked.
 * @param checkboxElementId The id of the checkbox element.
 * @returns {boolean}
 */
function checkboxIsChecked(checkboxElementId) {
    return document.getElementById(checkboxElementId).checked;
}
