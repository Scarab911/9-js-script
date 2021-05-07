/*
Automobilis:
- kuro kiekis (litrais)
- kuro sanaudos litrais 100 kilometru
- norimas nuvaziuoti atstumas (kilometrais)

Ar pavyks nuvaziuoti norma atstuma su turimu kieku?
*/

function canDrive(kiekis, sanaudos, atstumas) {
    console.log('kuro kiekis', kiekis);
    console.log('sanaudos', sanaudos);
    console.log('atstumas', atstumas);

    const imanomasNuvaziuotiAtstumas = kiekis/ sanaudos * 100;
    console.log(imanomasNuvaziuotiAtstumas);
    if(imanomasNuvaziuotiAtstumas >= atstumas) {
        return true;
    }
    return false;
}

const try1 = canDrive(20, 5, 400);
const try2 = canDrive(10, 5, 4);
const try3 = canDrive(10, 5, 401);
const try4 = canDrive(20, 5, 999);
const try5 = canDrive(10, 10, 300);

console.log(try1, `->`, true);
console.log(try2);
console.log(try3);
console.log(try4);
console.log(try5);