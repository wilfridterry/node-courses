// import {characters, greet} from './characters.mjs';
// import * as char from './characters.mjs';
// import log, * as char from './characters.mjs';
// import log, {characters, greet} from "./characters.mjs";
// import log, {characters, greet as hello} from "./characters.mjs";


async function main() {
   try {
        const {characters, greet} = await import('./characters.mjs');

        for (const c of characters) {
            greet(c);
        }
   } catch (e) {
       console.log('Error');
   }
}

main();
// log();