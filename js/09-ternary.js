/*
TERNARY OPERATOR
klausimas ? teigiama : neigiama

*/

const arLyja = true;

const sketis = arLyja ? `pasiimk` : `nereikia`;                    //`pasiimk` / `nereikia`
console.log(sketis);

const skaicius = 4 > 2 ? `daugiau` : `ne daugiau`;
console.log(skaicius);

console.log(`------------------------`);

// nestintas ternary

const color = `blue`;
const light = true;

const x1 = color === `blue` ? light ? `Sviesiai melyna` : `Tamsiai Melyna` : color === `red` ? `Raudona` : `nezinoma spalva`;
console.log(x1);