const { factorial } = require('./factorial.js');

const main = () => {
    performance.mark('start');
    const factorials = [
        compute([20, 30, 40, 50, 60])
    ];

    performance.mark('end');

    performance.measure('main', 'start', 'end');
    console.log(factorials);
    console.log(performance.getEntriesByName('main'));
};

const compute = (array) => {
    const arr = [];

    for (let i = 0; i < 100000000; i++) {
        arr.push(i*i);
    }

    return array.map(element => factorial(element));
};

main();