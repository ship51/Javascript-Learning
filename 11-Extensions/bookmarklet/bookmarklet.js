(function () {
    console.log("Bookmarklet starting...");
    let paragraphs = document.getElementsByTagName('p')
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "Prrereeeeeeeeeeeeeeeeee";
    }
})();


//(function () { let script = document.createElement('script'); script.src = 'bookmarklet.js'; document.body.appendChild(script);})();