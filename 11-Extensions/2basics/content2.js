// the script is does not run until the page is loaded

console.log("Chrome extension ready!");

let paragraphs = document.getElementsByTagName('p')

for (elt of paragraphs){
    elt.style['background-color'] = '#95E9C4';
}

//for (let i=0; i<paragraphs; i++)

