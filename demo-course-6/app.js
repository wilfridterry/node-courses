let outter = null;

const run = () => {
    let inner = outter;

    let unused = () => {
        if (inner) console.log('HI');
    };

    outter = {
        longStr: new Array(10).join('*')
    };
    console.log(outter, new Array(10));
};

// setInterval(run, 1000);
run()