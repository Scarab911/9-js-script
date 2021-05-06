/*
Duotas array su tekstinemis reiksmemis (string)
Reikia sujungti juos atbulai
*/

//labas , rytas , tau ,sakau
const d = [`sakau`, `tau`, `rytas`, `labas`];
let reverse = '';

// reverse = reverse + d[3];
// reverse = `,`;
// reverse += d[2];
// reverse = `,`;
// reverse += d[1];
// reverse = `,`;
// reverse += d[0];
// reverse = `,`;

// console.log(reverse);

reverse = `${d[3]}, ${d[2]}, ${d[1]}, ${d[0]} `
console.log(reverse);

//arba

const d2 = [...d];
const jras = d2.reverse().join(', ');

console.log(jras);