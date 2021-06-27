console.log("Background extention is active!");

chrome.browserAction.onClicked.addListener(buttonClicked)

// function buttonClicked(tab){
//     console.log("Button clicked!");
//     console.log(tab);
// }

function buttonClicked(tab){
    console.log("Button clicked!");

    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}