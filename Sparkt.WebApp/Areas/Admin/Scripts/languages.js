var languages = function () {
    var that = {};

    var languageConstant = [
        { 'Language': 'Hindi', 'Code': 'hi' },
        { 'Language': 'English', 'Code': 'en' },
        { 'Language': 'Marathi', 'Code': 'mr' }
    ]

    that.getLanguageCode = function (langauge) {
        var code = $.grep(languageConstant, function (element, index) {
            return element.Language == langauge;
        });
        if (code == null || code.length == 0) {
            return 'en';
        }
       return code[0].Code;
    }

    return that;
}();