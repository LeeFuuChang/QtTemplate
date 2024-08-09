window.translation = {
    "app-feature-developing": {
        "en": "This feature is still in development",
        "tw": "此功能尚在開發中",
        "cn": "此功能尚在开发中",
    },
};

window.SetLanguage = function(lang) {
    $("#app").attr("lang", lang||"en");
    window.RefreshPage();
};

window.GetLangText = function(key) {
    return window.translation[key][$("#app").attr("lang")||"en"];
};