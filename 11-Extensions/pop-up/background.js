console.log("Background extention is active!");

//if the extension icon is clicked
chrome.browserAction.onClicked.addListener(buttonClicked)

// function buttonClicked(tab){
//     console.log("Button clicked!");
//     console.log(tab);
// }

function buttonClicked(tab){
    //check 'background page' from extensions page in the browser
    console.log("Button clicked!");

    let msg = {
        txt: "hello"
    }

    //send message to content
    chrome.tabs.sendMessage(tab.id, msg);
}