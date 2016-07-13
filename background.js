//different types of contexts - selection, link, image, page
var contextsList = ["selection", "link", "image", "page"];

for(i=0;i<contextsList.length;i++) {
    var context = contextsList[i];
    var titleX = "Twitter Social Toolkit: Share this "+context+" to your Twitter Account";
    chrome.contextMenus.create({
        title: titleX,
        contexts: [context],
        onclick: clickHandler,
        id: context
    });
}

function clickHandler(data, tab) {
    //alert(selectedText.selectionText);
    //chrome.tabs.create({url: "https://twitter.com/share?text="+selectedText.selectionText});
    switch(data.menuItemId) {
        case 'selection' :
            chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText), type: "panel"});
            break;
        case 'link' :
            chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl), type: "panel"});
            break;
        case 'image' :
            chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl), type: "panel"});
            break;
        case 'page' :
            chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl), type: "panel"});
            break;
    }
}
