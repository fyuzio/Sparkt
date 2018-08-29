var ajaxHelper = function () {

    var that = {};

    var handleUnCoughtException = function (xhr, errorType, error) {
        alert(customMessages.SomethingWentWrong);
        commonHelper.showHideLoader(false);
    };

    that.ajaxGet = function (url, dataType, data, callback, errorcallback) {

        $.ajax({
            url: url,
            type: 'GET',
            dataType: dataType,
            data: data,
            success: function (data) {
                if (data.StatusCode) {
                    if (data.StatusCode == "401") {
                        alert(data.Message);
                    } else if (data.StatusCode == "406") {
                        alert(data.Message);
                        window.location.href = data.RedirectUrl;
                    }
                }
                else {
                    callback(data);
                }
            },
            error: function (xhr, errorType, error) {
                if (errorcallback != null && errorcallback != undefined) {
                    errorcallback(xhr, errorType, error);
                }
                else {
                    handleUnCoughtException(xhr, errorType, error);
                }
            },
            cache: false
        })
    };

    that.ajaxPost = function (url, dataType, data, callback, errorcallback) {
        var request = { url: url, type: "POST" };
        if (dataType != null || dataType != undefined) {
            request.dataType = dataType;
        }

        request.data = data;

        request.success = function (data) {
            if (data.StatusCode) {
                if (data.StatusCode == "401") {
                    alert(data.Message);
                } else if (data.StatusCode == "406") {
                    alert(data.Message);
                    window.location.href = data.RedirectUrl;
                }
            }
            else {
                callback(data);
            }
        };

        request.error = function (xhr, errorType, error) {
            if (errorcallback != null && errorcallback != undefined) {
                errorcallback(xhr, errorType, error);
            }
            else {
                handleUnCoughtException(xhr, errorType, error);
            }
        };

        request.cache = false;
        $.ajax(request);
    };

    return that;

}();