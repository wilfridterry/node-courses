// async function async() {
//     return 'ff';
// }

// async().then(log)

function log(message) {
    console.log(message);
}

async function f() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('MESSAGE'), 1000);
    });

    let result = await promise;// будет ждать, пока промис не выполнится (*)

    console.log(result);
}

f().catch(error => log);


// (async ()=>{
//     const response = await fetch('URL');
//     response = response.json();
// })().then(err => log);

async function d() {

    try {
        const rejectedPromise = Promise.reject(1);
    } catch(e) {
        log(e)
    }
} 

class Waiter 
{
    constructor(name) {
        this.name = name;
    }

    async wait() {
        return Promise.resolve(1);
    }
}

new Waiter().wait().then(response => log).catch(error => log)


async function all() {
    const result = await Promise.all([
            get(), 
            get(), 
            get()
        ])
} 

function get() {
    return Promise.resolve(1);
}

