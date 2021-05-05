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