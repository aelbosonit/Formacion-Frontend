const arrNames = [
    { id: 1, name: 'Pepe' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Alba' },
    { id: 4, name: 'Toby' },
    { id: 5, name: 'Lala' }
]

const result = arrNames.find(elemento => {
    return elemento.id === 3;
});

console.log(result);