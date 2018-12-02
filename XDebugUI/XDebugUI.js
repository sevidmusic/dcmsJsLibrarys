var xDebugElems = document.getElementsByClassName('xdebug-var-dump');

foreach(xDebugElems, 'updateXDebugStyles');

function updateXDebugStyles(xDebugElement) {
    foreach(xDebugElement.getElementsByTagName('small'), 'applySmallStyles');
    foreach(xDebugElement.getElementsByTagName('b'), 'applyBStyles');
    foreach(xDebugElement.getElementsByTagName('i'), 'applyIStyles');
    foreach(xDebugElement.getElementsByTagName('font'), 'applyFontStyles');
}

function applySmallStyles(element) {
    element.style.color = '#a8cbd2';
    element.style.display = 'block';
}

function applyBStyles(element) {
    element.style.color = '#6bd274';
    //element.style.display = 'block';
}

function applyIStyles(element) {
    element.style.color = '#8777d2';
    element.style.display = 'block';
}

function applyFontStyles(element) {
    element.style.color = '#54cad2';
    //element.style.display = 'block';
}

function foreach(obj, call) { // @todo Mark for DCMS js library
    Object.keys(obj).forEach(function (item) {
        AjaxFunctionCall(call, window, [obj[item]]); // @todo the AjaxFunctionCall() method should be renamed to callFunctionByName and moved to the DCMS js library once it is created so all libraries can use it.
    });
}
