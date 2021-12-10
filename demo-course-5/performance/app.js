const { Worker } = require('worker_threads');
const { fork } = require('child_process');
const { performance, PerformanceObserver } = require('perf_hooks');
const { readFileSync } = require('fs');

const file = readFileSync(__dirname + './file.mp4');

const performanceObserver = new PerformanceObserver((items) => {
    const entries = items.getEntries();

    entries.forEach((entry) => {
        console.log(`Name:${entry.name}, duration:${entry.duration}`);
    });
});

performanceObserver.observe({entryTypes: ['measure']});


let workerFunction = (array) => {
    return new Promise((resolve, reject) => {
        performance.mark('w.start');
        const worker = new Worker(__dirname + '/worker.js', {workerData: array, file});

        worker.on('message', (result) => {

            performance.mark('w.end');
            performance.measure('worker', 'w.start', 'w.end');
            resolve(result);
        });

        worker.on('error', (error) => {
            reject(error);
        });
    });
};

let forkFunction = (array) => {
    return new Promise((resolve, reject) => {
        performance.mark('f.start');

        const process = fork(__dirname + '/fork.js', );
        process.send(array);

        process.on('message', (message) => {
            performance.mark('f.end');
            performance.measure('fork', 'f.start', 'f.end');

            resolve(message);
        });

        process.on('error', (error) => {
            reject(error);
        })
    });
}

const main = async () => {
    const result1 = await workerFunction([1, 2, 3, 4]);
    const result2 = await forkFunction([1, 2, 3, 4]);
}

main();