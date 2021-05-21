/*



const a = [2, 3, 1, 4, 2];

1) karta i sekunde isspausdinti po reiksme
2) arejuje nurodyta, kiek sekundziu reikia laukti, kol bus isspausdinta nurodyta reiksme



*/
const a = [2, 3, 1, 20, 2];

let tarpas = 0

for (let i = 0; i < a.length; i++) {
    tarpas = a[i];
    // console.log(index);
}
let index = 0
const skaiciuokle = setInterval(() => {
    if(index < a.length) {
        console.log(a[index++]);
    } else {
        clearInterval (skaiciuokle)
    }

}, tarpas*1000)

    
    

    



/* setTimeout(() => {
    console.log(count++);
}, 3000); vienkartinis procesas
*/

/*const timer1 = setInterval(() => {
    if(count < 10){
    console.log(count++);
    } else{
        clearInterval(timer1)
    }
}, 1000);
*/
