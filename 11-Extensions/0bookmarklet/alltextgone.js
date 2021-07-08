(function () {
    console.log("Bookmarklet starting...");
    let paragraphs = document.getElementsByTagName('p')
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "Para is gone";
    }
    
    let divisions = document.getElementsByTagName('div')
    for (let i = 0; i < divisions.length; i++) {
        divisions[i].innerHTML = "Div is gone";
    }

    let header1 = document.getElementsByTagName('h1')
    for (let i = 0; i < header1.length; i++) {
        header1[i].innerHTML = "h1 is gone";
    }
})();


//(function () { let script = document.createElement('script'); script.src = 'bookmarklet.js'; document.body.appendChild(script);})();