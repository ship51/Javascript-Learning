// the script is does not run until the page is loaded

console.log("Chrome extension ready!");

let filenames = [
    "amy-baugess-MNju0A6EeE0-unsplash.jpg",
    "ilse-orsel-vmFEBIEz0hQ-unsplash.jpg",
    "jari-hytonen-YCPkW_r_6uA-unsplash.jpg",
    "the-lucky-neko-JYhw8TtoxTg-unsplash.jpg",
    "the-lucky-neko-uePn9YCTCY0-unsplash.jpg"
];

// uncomment and edit to run the extension after a click
//chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     console.log(message.txt);
//     if (message.txt === "hello") {
let imgs = document.getElementsByTagName('img')
for (imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'kittens/' + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(url);
}
//         }
//     }
// }




