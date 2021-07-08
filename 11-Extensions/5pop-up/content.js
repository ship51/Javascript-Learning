// the script is does not run until the page is loaded

console.log("Chrome extension ready!");

//if clicked on the extension icon
chrome.runtime.onMessage.addListener(gotMessage);


//if message received from background
function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "hello") {
        let paragraphs = document.getElementsByTagName('p')
        for (elt of paragraphs) {
            elt.style['background-color'] = '#FF00FF';
        }
    }
}