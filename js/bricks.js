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

        const sienuPlotas = sienuIlgis * aukstis;

        const plytosPlotas = plytosAukstis * plytosPlotis;

        const reikiaPlytu = sienuPlotas / plytosPlotas;

    return reikiaPlytu;
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3, 10], 0.5, 0.1, 0.2), '->', 150);
