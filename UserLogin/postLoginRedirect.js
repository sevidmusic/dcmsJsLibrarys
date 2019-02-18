if (loginUser) {
    console.log(loginUser); // set to 1 minute while in dev
    dcmsRedirect(redirectUrl,2000);

    /**
     * Redirect on user to specified url after x seconds.
     * Adapted from answer on https://stackoverflow.com/
     * @param url The url to to get values from.
     * @param x Number of seconds to wait before redirecting.
     * @see https://stackoverflow.com/questions/17150171/page-redirect-after-x-seconds-wait-using-javascript

     */
    function dcmsRedirect(url, x) {
        if (url) {
            if (!x) {
                x = 3000;
            }
            // Initiate redirect every x seconds
            window.setTimeout(function () {

                // Move to a new location or you can do something else
                window.location.href = url;

            }, x);
        }
    }

    /**
     * Return values from GET.
     * @param name The name of the parameter to get
     * @param url The url to to get values from.
     * @returns {*} The value.
     * From answer on https://stackoverflow.com/
     * @see https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     */
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}
