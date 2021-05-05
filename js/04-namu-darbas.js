
//Skaiciai
const pirmas = 10;
const antras = 57;
const trecias = 23;

console.log(pirmas, antras, trecias);

//Tekstas
const tetis = 'Vytautas'
const sunus = 'Paulius'
const dukra = 'Monika'

console.log(tetis,sunus,dukra);

//Sarasas skaiciai array

const lyginiai = [2, 8, 22, 34, 100];
const nelyginiai = [3, 7, 21, 49, 81];
const neigiami = [-5, -10, -24, -33, -67];

console.log(lyginiai, nelyginiai, neigiami);

//Sarasas teksas

const istiktukai = ['keberiokst', 'pyst', 'oi', 'smurkst', 'jablinkst'];
const spalvos = ['juoda', 'raudona', 'zalia', 'violetine', 'bordo'];
const medziai = ['azuolas', 'liepa', 'uosis','berzas', 'egle'];

console.log(istiktukai, spalvos, medziai);

//Veiksai su kintamaisiai

//1

var suma = (pirmas+antras+trecias);
console.log(suma);

console.log(`${pirmas}+${antras}+${trecias}=${suma}`);

//2

const vardai = (tetis + ' ' + sunus + ' ' + dukra);
const vardai2 = `${tetis} ${sunus} ${dukra}`; //trumpesnis paprastesnis
console.log(vardai);
console.log(vardai2);

//3
console.log(`---------3------`);

const apskaita = lyginiai[0]-lyginiai[1]+lyginiai[2]-lyginiai[3]+lyginiai[4];
console.log(apskaita);

const zodziai = (istiktukai + `,` + ' ' + spalvos + `,` +  ' ' + medziai);
console.log(zodziai);

console.log(`-------3b--------`);

//sujunk zodzius


const sakinys = `${spalvos[4]}, ${spalvos[3]}, ${spalvos[2]}, ${spalvos[1]}, ${spalvos[0]}`
console.log(spalvos);
console.log(sakinys);

//sinusai

const angle=30;
const sin30= Math.sin(angle / 180* Math.PI);
console.log(sin30);

// kelimas laipsniu ir saknis

console.log(Math.sqrt(81));  //kvadratine saknis
console.log(Math.pow(2,3)); //kelimas laipsniu
console.log(2**3);          //kelimas laipsniu
console.log();              //liekana