/*
ARRAY

array metodai:
- .push() metodas prideti i gala nauja reiksme
- .unshift()
- .pop()
- .shift()

*/

const marks = [10, 2, 8, 4, 6, 2, 7];
const size = marks.length;   //nustatom ilgi
const firstMark = marks[0];     //pirmas visada turi nuline eiles vieta

const second = marks[1];
const last = marks[size - 1];

console.log(marks);
console.log(`pirmas:`, firstMark);
console.log(`antras:`, second);
console.log(`paskutinis:`, last);


//txt array
const dict = [`labas`, `rytas`, `sakau`, `tau`]
const paskutinisZodis = dict[dict.length - 1];
console.log(paskutinisZodis);

console.log(`--------------------------------`);

const abc = [`b`, `c`];
console.log(abc);

abc.push(`d`);
console.log(abc);

abc.shift();
console.log(abc);

abc.pop();
console.log(abc);

console.log(abc.reverse());
console.log(abc);

console.log([`a`, `b`].concat([`b`, `c`]));

const a1 = [`a`, `b`];
const a2 = [`b`, `c`];
const a12 = a1.concat(a2);
console.log(a1);
console.log(a2);
console.log(a12);

const modern1 = [...a1, ...a2, ...a12]; //modernus join'as sujungimas sarasu
console.log(modern1);

const modern2 = [...a2, ...a1]; 
console.log(modern2);
