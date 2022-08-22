const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false, isSpain: true },
    { city: 'Paris', country: 'France', capital: true, isSpain: false },
    { city: 'Madrid', country: 'Spain', capital: true, isSpain: true },
    { city: 'Rome', country: 'Italy', capital: true, isSpain: false },
    { city: 'Oslo', country: 'Norway', capital: true, isSpain: false },
    { city: 'Jaén', country: 'Spain', capital: false, isSpain: true }
]

const result =  [];

arrCities.forEach(element => {
    if(element.capital === false) {
        result.push(element)
    }
});

console.log(result);
