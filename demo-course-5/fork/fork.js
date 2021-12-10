process.on('message', (msg) => {

    if (msg?.status == 'OFF') {
        process.disconnect;
        return;
    }

    console.log(`Client: ${msg}`);
    process.send('Pong!');

    process.disconnect();
});