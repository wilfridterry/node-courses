const {characters, stealRing, log} = require('./characters.js');

let myChars = stealRing(characters, 'Frodo');

for (const c of myChars) {
    console.log(c);
}

// const a = -1;

// if (a >= 0) {
//     const log = require('./characters.js');
//     log();
// }