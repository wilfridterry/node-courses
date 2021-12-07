let characters = [
    {name: 'Frodo', hasRing: false},
    {name: 'Bilbo', hasRing: false}
];

function stealRing(characters, owner) {
    characters.map(c => {
        c.hasRing = (c.name == owner) ? true : false;
    });

    return characters;
}

module.exports = { 
    characters, 
    stealRing, 
    log: function() {
        console.log('LOG');
    }
}