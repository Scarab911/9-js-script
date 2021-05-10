/*
UZDUOTIS

- gaunam kiek sienu turi namas;
- zinom kokio dydzio yra siena;
- sienos neturi angu
- zinom sienos auksti, kuris visur yra vienodas
- turim plutos dydi (aukstis, plotis)
- reikia keliu plytu reikes visom sienoms jei plytu 
    skaldyti negalima.
*/


function  bricks(sienuPlociai, aukstis, plytosAukstis, plytosPlotis){

    let sienuIlgis = 0;
    
        for (let i = 0; i < sienuPlociai.length; i++) {

            sienuIlgis += sienuPlociai[i];

        } 
        console.log(sienuIlgis);

        const plytuIlgyje = Math.ceil(sienuIlgis/plytosPlotis);

        const plytosAukstyje = Math.ceil(aukstis/ plytosAukstis);

        const reikiaPlytu = plytuIlgyje* plytosAukstyje;

    return reikiaPlytu;
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);
console.log(bricks([1.05], 1.05, 0.1, 0.2), '->', 66);

// MAtematnes funkcijos
// Math.floor - apvalinimasi apatine puse kiek yra pilnu sveiku skaiciu;
// Math.ceil - apvalinimasi virsu, bent kiek virs pvz 8.00001 = 9;
// Math.round - reguliarus matematinis apvalinis ties 0.5;