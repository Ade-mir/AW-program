// function sayHello() {
//     console.log('hello');
// }

// let intervalRef = setInterval(function () {
//     sayHello()
// }, 1000);

// setTimeout(function () {
//     clearInterval(intervalRef);
//     console.log('I am done');
// }, 5000);


function wait(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    })
}

for (let i = 0; i < 5; i++) {
    console.log('hello');
    await wait(1000);
}

console.log('I am done');