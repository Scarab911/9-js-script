/*
DAY

jeigu dabar yra 0:00 iki 4:59 -> Naktis
jeigu dabar yra 5:00 iki 10:59 -> Rytas
jeigu dabar yra 11:00 iki 18:59 -> Diena
jeigu dabar yra 19:00 iki 23:59 -> Vakaras


*/

function parosMetas(val, min) {
    console.log('val', val);
    console.log('min', min);

    if (val < 5){
        return 'naktis'
    }
    if (val < 11){
        return 'rytas'
    }
    if (val < 19){
        return 'diena'
    }
    return 'Vakaras'
}

console.log(parosMetas(5, 39));

