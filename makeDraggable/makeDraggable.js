/**
 * This library will target any elements assigned the class "dcms-make-draggable" and will make them draggable
 * if possible.
 */

var elements = document.getElementsByClassName('dcms-make-draggable');
var i = 0;
for (i = 0; i < elements.length; i++) {
    var element = elements[i];
    makeDraggable(element);
    makeFocusable(element);
    i = i++;
}

function makeDraggable(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(element.id + "Handle")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(element.id + "Handle").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        element.style.zIndex = "1000";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        element.style.zIndex = "0";
    }
}

function makeFocusable(element) {
    /**
     *  *NOTE: Focus should NOT happen onclick, as this causes interference with other elements after z-index is
     *  increased, ondblclick does not cause the same issue so should be preferred until onclick can be made to
     *  work properly, also note onclick would be preferable for applyFocus, and consequently ondblclick would
     *  be preferable for removeFocus.
     *  @todo Make focus work with onclick so double click is used to remove focus, i.e. switch logic around.
     */
    element.ondblclick = focusElement;

    function focusElement(e) {
        resetAll();
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        document.onclick = removeFocus; // @todo See *NOTE above
        // call a function whenever the cursor moves:
        document.ondblclick = applyFocus; // @todo See *NOTE above
    }

    function applyFocus(e) {
        e = e || window.event;
        e.preventDefault();
        element.style.zIndex = "1000";
    }

    function removeFocus() {
        document.ondblclick = null;
        document.onclick = null;
    }

    function resetAll() {
        var elements = document.getElementsByClassName('dcms-make-draggable');
        var i = 0;
        for (i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.style.zIndex = "0";
        }
    }
}
