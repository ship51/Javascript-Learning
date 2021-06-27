// the script is does not run until the page is loaded

console.log("Chrome extension ready!");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "hello") {
        let paragraphs = document.getElementsByTagName('p')
        for (elt of paragraphs) {
            elt.style['background-color'] = '#FF00FF';
        }
    }
}