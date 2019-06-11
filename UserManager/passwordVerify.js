// @todo move to js library once out of dev...
function verifyPasswordsMatch() {
    //alert('working');
    var password = getElementValue('UserPasswordFormElement');
    var confirmPassword = getElementValue('UserPasswordFormElementVerification');
    if (password !== confirmPassword) {
        document.getElementById('createUserJsMessages').innerHTML = "Passwords do not match!";
        document.getElementById('createUserJsMessages').classList.remove("dcms-positive-text");
        document.getElementById('createUserJsMessages').classList.add("dcms-negative-text");
        document.getElementById('createUserAppCreateUserButton').setAttribute('style', 'display: none;');

    } else {
        document.getElementById('createUserJsMessages').innerHTML = "Passwords match!";
        document.getElementById('createUserJsMessages').classList.remove("dcms-negative-text");
        document.getElementById('createUserJsMessages').classList.add("dcms-positive-text");
        document.getElementById('createUserAppCreateUserButton').setAttribute('style', 'display: block;');
    }
}
