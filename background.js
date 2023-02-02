let enabled = false;

browser.browserAction.onClicked.addListener(async (tab) => {
    browser.tabs.executeScript({
        file: "clock.js",
    });
    browser.tabs.insertCSS({
        file: "clock.css",
    });
});
