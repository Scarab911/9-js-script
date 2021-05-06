/*
IF salygos sakinys

PALYGINIMO OPERATORIAI:

visi: >, <, >=, <=, ==(ar lygu?), !=(ar nelygu?), ===, !==
nenaudotini: ==, != (nekreipia demesio i tipus)
naudotini: >, <, >=, <=, ===, !==

SABLONAI:
- if (){}
- if (){} else {}
- if (){} else if {}
*/

if (4>2) {
console.log('taip');
}
console.log(`------------------`);

const a = 44;
const b = `44`;

if (a===b) {
    console.log('taip');
} else {
    console.log('ne');
}

const akys = `rudos`;

 if (akys === `melynos`) {
     console.log(`Melynakis`);
 } else if (akys === `zalios`) {
     console.log(`Zaliaakis`);
 } else if (akys === `rudos`){
    console.log(`Rudaakis`);
 }   else {
        console.log(`Neatpazinta akiu spalva`);
    }

console.log(`--------------uzduotys--------------`);

const ax = 5;
const bx = 8;
const cx = 3;

if (ax>bx){
    console.log(`pomidoras`);
    }
    else{
        console.log(`bandykite kita karta`);
    }

if(ax === cx){
    console.log(`pomidoras`);
} else {
    console.log(`bandykite kita karta`);
}

if (bx !== cx){
    console.log(`pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

if (ax>=bx){
    console.log(`pomidoras`);
    }
    else{
        console.log(`bandykite kita karta`);
    }

if (ax<=bx){
    console.log(`pomidoras`);
    }
    else{
        console.log(`bandykite kita karta`);
    }


const x = `saltas`;
const y = 'vakaras';

const xIlgis = x.length;
const yIlgis = y.length;
console.log(xIlgis);
console.log(yIlgis);

if (xIlgis > yIlgis){
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

if (xIlgis < yIlgis){
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

if (xIlgis >= yIlgis){
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

if (xIlgis <= yIlgis){
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

if (xIlgis === yIlgis){
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

if (xIlgis !== yIlgis){
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite kita karta`);
}

