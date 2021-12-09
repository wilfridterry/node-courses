/**
 * - инициализация 
 * 
 * ## Фазы
 *  //// microtaskQueue, nextTick  (Promises)
 * - таймеры
 * //// microtaskQueue, nextTick  (Promises)
 * - pending callback(от системных операций) (рассчет времени, I/O ~ input/output - filesystem, network)
 *  //// microtaskQueue, nextTick  (Promises)
 * - idle, prepare (внутреняя)
 *  //// microtaskQueue, nextTick  (Promises)
 * - poll (Весь код)
 *  //// microtaskQueue, nextTick  (Promises)
 * - check (все setImmediate - в конце всего, но только в рамках одной иттерации EventLoop)
 *  //// microtaskQueue, nextTick  (Promises)
 * - close callback (БД, сокеты)
 * 
 * - проверка на окончание
 */

const fs = require('fs');

// console.log('Init');

// setTimeout(() => {
//     console.log(performance.now(), 'In 100 ms');
// }, 100);

// setImmediate(() => {
//     console.log('Immediate');
// });

// fs.readFile(__filename, () => {
//     console.log('File readed');
// });

// setTimeout(() => {
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log('Done');

//     Promise.resolve().then(() => {
//         console.log('Promise inside setTimeout');
//     });

//     process.nextTick(() => console.log('tick inside setTimeout'));

// });

// Promise.resolve().then(() => {
//     console.log('Promise');
// });

// process.nextTick(() => console.log('tick'));

// console.log('Final');

console.log('Start');

setTimeout(() => {
    console.log('Set timeout');
}, 0);

fs.readFile(__filename, () => {
    console.log('File readed');
});