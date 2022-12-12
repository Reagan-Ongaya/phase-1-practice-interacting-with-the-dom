setTimeout(() => {
    console.log("Delayed for 1 second.");
}, 1000)

const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(like1, like2) {
    console.log(like1);
    console.log(like2);
}

myCallback();