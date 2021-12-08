// const start = performance.now();

// setTimeout(() => {
//     console.log(performance.now() - start);
//     console.log("One second");
// }, 1000);

// function myFunct(arg) {
//     console.log(`An argument: ${arg}`);
// }

// setTimeout(myFunct, 1500, 'RED');


// const timerId = setTimeout(() => {
//     console.log('BOOM!');
// }, 5000);

// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('Cleared!');
// }, 1000);

// const timerId = setInterval(() => {
//     console.log(`Interval:${performance.now()}`);
// }, 1000);

// setTimeout(() => {
//     clearInterval(timerId);
// }, 5000);

// console.log('START');
// setImmediate(() => {
//     console.log('AFTER ALL');
// });
// console.log('FINISH');


// const timerId = setTimeout(() => {
//     console.log("5 seconds");
// }, 5000);

// timerId.unref();
// console.log('Unref');

// setTimeout(() => {
//     timerId.ref();
// }, 1000);