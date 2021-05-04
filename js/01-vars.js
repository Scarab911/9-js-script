/*

INICIAVIMO BUDAS(keiciamumas ir scope'as):
const- nekeiciama reiksme
let - keiciama reiksme
var - keiciama reiksme

KINTAMUJU TIPAI:
number(skaicius)
string(tekstas)
boolean - true/ false
array(saras,masyvas,matrica)
objekt (ojektas); {} - lauztiniai skliaustai zymi objektus
null (reiksme kuri neegzistuoja bet yra)
undefined (neapibrezta)
map
set

*/

const metai = 2021
console.log(metai);

const vardas = 'vardenis'
console.log(vardas);

const arSninga = false;
console.log('Ar sninga:', arSninga);

const pazymiai = [10, 2, 8, 3];
console.log(pazymiai);

const zodynas = ['labas','rytas','sakau','tau'];
console.log(zodynas);

const petras = {
    vardas: 'Petras',
    amzius: 99,
    gyvenamojivieta: 'Gatve g. 1-3, Miestas',
    vaikai: [
        {
            vardas: Onute,
            amzius: 67
        }
    ]
}
console.log(petras);