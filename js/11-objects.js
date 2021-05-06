/*
objektas yra key-value (raktozodziu ir reiksmiu) rinkinys.
*/

const petras = {
    name: `Petras`,
    age: 99,
    color: `blue`
};

const maryte = {
    name: `Maryt`,
    age: 67,
    color: `brown`
};

console.log(maryte.name);
console.log(petras.color);

const gyventojai = [petras, maryte];

console.log(gyventojai[0].name);
console.log(gyventojai[1].age);

const batas = {
    name: `kaliosas`,
    color: `red`,
    pricing: [
        {
            country: `LT`,
            price: 99
        },
        {
            country : `LV`,
            price : 88
        },
        {
            country : `EE`,
            price: 105
        },
    ]
}

console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

const kepure = {
    name: `skrybeliukas`,
    color: `violetine`,
    pricing: {
        lt: 99,
        lv: 88,
        ee: 145
    }
}

console.log(kepure.name);