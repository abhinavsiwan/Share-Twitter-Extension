var options = {
    type:"basic",
    title:"Twitter Share Toolkit",
    message:"New Message from Twitter",
    iconUrl: "icon.png",
    //imageUrl: "icon.png"
};

chrome.notifications.create(options);

chrome.notifications.onClicked.addListener(reDirectWindow);

function reDirectWindow() {
    alert("New Message from Twitter");
}