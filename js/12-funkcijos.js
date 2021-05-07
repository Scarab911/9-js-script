/*
Reikia funkcijos kuriai davus varda, grazintu pasisveikinimo teksta

pvz: Labas, as esu Vardenis!
*/

// Maryte > Labas as esu, Maryte.
// Jonas > Labas as esu, Jonas.



function hi(vardas) {
    return `Labas, as esu ${vardas}!`;
}

const hiVardenis = hi('Vardenis');
console.log(hiVardas);

const hiJonas = hi('Jonas');

const hiMaryte = `Labas, as esu Maryte`;