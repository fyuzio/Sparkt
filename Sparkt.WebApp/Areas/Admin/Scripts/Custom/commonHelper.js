var commonHelper = function () {
    var that = {};

    var loaderHtml = '<div id="custom-loader" class="overlay"><i class="fa fa-spinner fa-spin"></i></div>';

    that.handleStatusCode = function (statusCode) {
        var errorMessage = 'Uncaught Error.';
        switch (statusCode) {
            case 0:
                errorMessage = 'Not connect.\n Verify Network.';
                break;
            case 404:
                errorMessage = 'Requested page not found. [404]';
                break;
            case 500:
                errorMessage = 'Internal Server Error [500].';
            case 401:
                errorMessage = 'UnAuthorized access to requested content.';
                break;
        }

        alert(errorMessage);
    };

    that.showHideLoader = function (toBeShown) {
        if (toBeShown) {
            if ($('body').find('#custom-loader').length == 0) {
                $('body').append(loaderHtml);
            }
        }
        else {
            if ($('body').find('#custom-loader').length > 0) {
                $('body').find('#custom-loader').each(function () {
                    $(this).remove();
                });
            }
        }
    }

    that.renderCustomDataTableColumns = function (dataTableApi) {

        dataTableApi.columns().every(function () {

            var column = this;
            var filterType = $(column.header()).attr('class');
            var caption = $(column.header()).attr('aria-label');
            if (filterType.indexOf("no-filter") != -1) {
                return;
            } else if (filterType.indexOf('text-filter') != -1) {
                var select = $('<input type="text" placeholder="' + caption + '"/>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $.trim($(this).val())
                        );
                        column.search(val, true, false).draw();
                    });
            }
            else {
                var select = $('<select><option value="">' + caption + '</option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
                        column.search("^" + val, true, false, true ).draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    var headerClass = $(column.header()).attr('class');
                    var data = d;
                    if (headerClass.indexOf("status-filter") != -1) {
                        data = d == true ? "Active" : "Inactive";
                    }
                    
                    if (column.search() === '^' + data + '$') {
                        select.append('<option value="' + data + '" selected="selected">' + data + '</option>')
                    } else {
                        select.append('<option value="' + data + '">' + data + '</option>')
                    }
                });
            }

        });

        $('select').material_select();

    }

    return that;
}();


var customMessages = function () {

    var that = {};

    that.SomethingWentWrong = "It Seems somethign fishy went while processing your request.";

    return that;

}();

var commonConstant = function () {

    var that = {};

    that.defaultGoogleMetaTags = '<meta itemprop="name" content="">\n<meta itemprop="description" content="">';
    that.defaultFacebookMetaTagsVideo = '<meta property="og:title" content="" />\n<meta property="og:url" content="" />\n<meta property="og:description" content="" />\n<meta property="og:site_name" content="" />\n<meta property="og:type" content="website" />\n<meta property="fb:admins" content="" />\n<meta property="og:image" content="" />\n<meta property="og:video:type" content="application/x-shockwave-flash">\n<meta property="og:video:secure_url" content="" />\n<meta property="og:video:width" content="video_width" />\n<meta property="og:video:height" content="name="video_height" />';
    that.defaultFacebookMetaTagsImage = '<meta property="og:title" content="" />\n<meta property="og:url" content="" />\n<meta property="og:description" content="" />\n<meta property="og:site_name" content="" />\n<meta property="og:image" content="" />';
    that.defaultFacebookMetaTagsArticle = '<meta property="og:title" content="" />\n<meta property="og:url" content="" />\n<meta property="og:description" content="" />\n<meta property="og:site_name" content="" />\n<meta property="og:type" content="website" />\n<meta property="og:image" content="" />';
    that.defaultFacebookMetaTags = '<meta property="og:title" content="" />\n<meta property="og:url" content="" />\n<meta property="og:description" content="" />\n<meta property="og:site_name" content="" />\n<meta property="og:type" content="website" />\n<meta property="fb:admins" content="" />\n<meta property="og:image" content="" />';
    that.defaultTwitterSummaryCardMetaTags = '<meta name="twitter:card" content="summary" />\n<meta name="twitter:site" content="" />\n<meta name="twitter:title" content="" />\n<meta name="twitter:description" content="" />\n<meta name="twitter:image" content="" />';
    that.defaultTwitterSummaryWithLargeImageMetaTags = '<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:site" content="">\n<meta name="twitter:creator" content="">\n<meta name="twitter:title" content="">\n<meta name="twitter:description" content="">\n<meta name="twitter:image" content="">';
    that.defaultTwitterAppCardMetaTags = '<meta name="twitter:card" content="app">\n<meta name="twitter:site" content="">\n<meta name="twitter:description" content="">\n<meta name="twitter:app:country" content="">\n<meta name="twitter:app:name:iphone" content="">\n<meta name="twitter:app:id:iphone" content="">\n<meta name="twitter:app:url:iphone" content="">\n<meta name="twitter:app:name:ipad" content="">\n<meta name="twitter:app:id:ipad" content="">\n<meta name="twitter:app:url:ipad" content="">\n<meta name="twitter:app:name:googleplay" content="">\n<meta name="twitter:app:id:googleplay" content="">\n<meta name="twitter:app:url:googleplay" content="">';
    that.defaultTwitterPlayerCardMetaTags = '<meta name="twitter:card" content="player">\n<meta name="twitter:title" content="">\n<meta name="twitter:site" content="">\n<meta name="twitter:description" content="">\n<meta name="twitter:player" content="">\n<meta name="twitter:player:width" content="">\n<meta name="twitter:player:height" content="">\n<meta name="twitter:image" content="">\n<meta name="twitter:image:alt" content="">\n<meta name="twitter:player:stream" content="">\n<meta name="twitter:player:stream:content_type" content="">';

    that.defaultTwitterMetaTagsVideo = '<meta name="twitter:card" content="player">\n<meta name="twitter:description" content="Episode 1 of the Political Mammals. The antics begin on their first day at being roommates!">\n<meta name="twitter:site" content="@u_cypher">\n<meta name="twitter:creator" content="@u_cypher">\n<meta name="twitter:player" content="You Tube URL">\n<meta name="twitter:image" content="">\n<meta name="twitter:player:width" content="1080">\n<meta name="twitter:player:height" content="720">\n<meta name="twitter:title" content="Title">\n<meta name="twitter:url" content="Page URL>\n<meta name="twitter:domain" content="">\n<meta name="twitter:player:stream:content_type" content="">\n<meta name="twitter:player:stream" content="">\n<meta name="twitter:app:id:iphone" content="">\n<meta name="twitter:app:id:ipad" content="">\n<meta name="twitter:app:id:googleplay" content="">\n<meta name="twitter:app:url:iphone" content="">\n<meta name="twitter:app:url:ipad" content="">\n<meta name="twitter:app:url:googleplay" content="">';
    that.defaultTwitterMetaTagsImage = '<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:site" content="">\n<meta name="twitter:creator" content="">\n<meta name="twitter:title" content="">\n<meta name="twitter:description" content="">\n<meta name="twitter:image" content="">';
    that.defaultTwitterMetaTagsArticle = '<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:site" content="">\n<meta name="twitter:creator" content="">\n<meta name="twitter:title" content="">\n<meta name="twitter:description" content="">\n<meta name="twitter:image" content="">';


    that.LocationContentType = {
        Office: 'Office',
        CorporateOffice: 'Corporate Office',
        Email: 'Email',
        PhoneCall: 'Phone Call',
        VisitingHour: 'Visiting Hour'
    }


    return that;


}();