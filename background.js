const adList = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googletagservices.com/*",
    "*://*.googleadservices.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googleadservices.com/*",
    "*://*.zedo.com/*",
    "*://*.adbrite.com/*",
    "*://*.adbureau.net/*",
    "*://*.carbonads.net/*",
    "*://*.cdn.carbonads.com/*",
    "*://*.cdn.carbonads.net/*",
    "*://*.cdn.doubleclick.net/*",
    "*://*.cdn.googletagservices.com/*",
    "*://*.cdn.googleadservices.com/*",
    "*://*.cdn.zedo.com/*",
    "*://*.adbutler.com/*",
    "*://*.openx.com/*",
    "*://*.kevel.com/*",
    "*://*.broadstreetads.com/*",
    "*://*.magnite.com/*",
    "*://*.soocaips.com/*",
]
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true}
    },
    {urls: adList},
    ["blocking"]
)






