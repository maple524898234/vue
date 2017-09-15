const getLocalStorage = function (key) {
    if (window.localStorage) {
        return window.localStorage.getItem(key);
    }
}
var headers = {
    token: getLocalStorage('token'),
    app_version: '0.0.1',
    os: 'h5',
    station: '440000',
    version: 'v1.2'
};

export{
	headers
}

