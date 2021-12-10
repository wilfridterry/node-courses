const { exec, spawn } = require('child_process');

// const childProcess = exec('dir', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stdout: ${stderr}`);
// });

// childProcess.on('exit', (code) => {
//     console.log(`Code exit: ${code}`);
// });

const childProcess = spawn('dir');

childProcess.stdout.on('data', (code) => {
    console.log(`Stdoutput: ${code}`);
});

childProcess.stderr.on('data', (code) => {
    console.log(`Stderror: ${code}`);
});

childProcess.on('exit', (code) => {
    console.log(`Code exit: ${code}`);
});