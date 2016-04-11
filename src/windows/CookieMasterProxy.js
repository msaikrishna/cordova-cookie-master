cordova.commandProxy.add("CookieMaster",{
    setCookieValue :function(successCallback,errorCallback, args) {
        if (!args || !args.length) {
            errorCallback();
        }
        else {
            var domain = args[0];
            var name = args[1];
            var value = args[2];
            var filter = new Windows.Web.Http.Filters.HttpBaseProtocolFilter();
            var cookieManager = filter.cookieManager;
            var httpCookie = new Windows.Web.Http.HttpCookie(name, domain, "/");
            httpCookie.value = value;
            var boolean = cookieManager.setCookie(httpCookie);
            successCallback();
        }
    },
    getCookieValue :function(successCallback, errorCallback, args) {
        errorCallback();
    },
    clearCookies :function(successCallback, errorCallback, args) {
        errorCallback();
    }
});