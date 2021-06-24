var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");


let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
        if (count == 1000)
            followers.innerText = "Followers in Instagram!";
    }
}, 10);


// setTimeout(() => {
//     followers.innerText = "Followers in Instagram!";
// }, 1000);