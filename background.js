chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "Test Menu",
        id: "Context Menu",
        contexts: ["page","selection"]
    })
    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event)
        // chrome.search.query({
        //     disposition:"NEW_TAB",
        //     text: `imdb ${event.selectionText}`
        // })
        chrome.tabs.create({
            url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`
        })
    })
})