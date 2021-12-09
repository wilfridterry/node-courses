const { Worker } = require('worker_threads');

const main = async () => {
    performance.mark('start');

    const result = await Promise.all([
        compute([20, 30, 40, 50, 60]),
        compute([20, 30, 40, 50, 60])
    ]);

    performance.mark('end');
    performance.measure('main', 'start', 'end');


    console.log(result);
    console.log(performance.getEntriesByName('main'));
};

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(__dirname + '/worker.js', { workerData: array });

        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg);
        });

        worker.on('error', (error) => {
            reject(error);
        });

        worker.on('exit', () => {
            console.log('Exit Thred');
        });
    });
};

main();