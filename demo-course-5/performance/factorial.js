function factorial(n) {

    if (n == 1 || n == 0) return 1;

    return n * factorial(n-1);
}

function compute(array) {
    let arr = [];

    for(let i; i < 100000000; $i++) {
        arr.push(i*i);
    }
    
    return array.map(element => factorial(element));
}

module.exports = { factorial, compute };

