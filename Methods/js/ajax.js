// settings = {
//     method: 'GET',
//     url: 'https://...',
//     data: 'some info',
//     timeout: 3000,
//     success: function on success,
//     error: function on error,
// }

const ajax = (function () {
    function send (settings) {
        const xhr = new XMLHttpRequest();
        
        xhr.addEventListener('error', function (e) {
            settings.error({
                errorText: xhr.responseText,
                code: xhr.status
            });
        })

        xhr.addEventListener('load', function (e) {
            settings.success(xhr.responseText);
        })

        xhr.addEventListener('timeout', function (e) {
            // some action on timeout
        })

        xhr.open(settings.method, settings.url);

        xhr.timeout = settings.timeout || 3000;

        if (settings.headers) {
            for (let headerName in settings.headers) {
                if (headerName) {
                    xhr.setRequestHeader(headerName, settings.headers[headerName]);
                }
                console.log(headerName);
            }
        }

        xhr.send(settings.data);
    }

    return {
        send: send
    }
})();