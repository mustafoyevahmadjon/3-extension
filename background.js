chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "Test Menu",
        id: "Context Menu",
        contexts: ["page","selection"]
    })
    chrome.contextMenus.onclicked.addListener((event) => {
        console.log(event)
    })
})