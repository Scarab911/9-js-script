/*
UZDAVINYS:
- gaminam kokteilius
- gaunam uzsakymu kieki per diena (vienetas)
- gaunam vienos porcijos dydi (litrais)
- vienos karves nasuma per diena litrais
- reikia rasti, kiek reikia karviu, norint patenkint visiems uzsakymams
*/


function milk(shakeNumber, oneShakeReq, milkProduced) {
    //validation

    if(typeof shakeNumber === 'undefined'){
        return 'ERROR: neduotas pirmas parametras!'
    }
        if(typeof shakeNumber !== 'number'){
            return 'ERROR: pirmas parametras turi buti skaicius!'
        }
            if (shakeNumber<0){
                return 'ERROR: pirmas parametras negali buti neigiamas'
            }
                if(shakeNumber % 1 !==0) {
                    return 'Error: pirmas parametras turi buti sveikasis skaicius!'
                }
    if(typeof oneShakeReq === 'undefined'){
        return 'ERROR: neduotas antras parametras!'
    }        
        if(typeof oneShakeReq !== 'number'){
            return 'ERROR: antras parametras turi buti skaicius!'
        }
            if (oneShakeReq<0){
                return 'ERROR: antras parametras negali buti neigiamas'
            }
    if(typeof milkProduced === 'undefined'){
        return 'ERROR: neduotas trecias parametras!'
    }
        if(typeof milkProduced !== 'number'){
            return 'ERROR: trecias parametras turi buti skaicius!'
        }
            if (milkProduced<=0){
                return 'ERROR: trecias parametras negali buti neigiamas'
            }
    //logic
    const milkReq = (shakeNumber * oneShakeReq);

    const cowNumber = Math.ceil(milkReq / milkProduced);
//return result
    return cowNumber;
}   


console.log(milk('labas', 0.5, 9));
console.log(milk(100, true, -9));
console.log(milk(100, 0.5, 'pasideram'));
console.log(milk(-100, 0.5, 9));
console.log(milk(100, -0.5, 9));
console.log(milk(100, 0.5, -9));
console.log(milk(2.5, 0.5, 9));


console.log(milk(10, 0.5, 9), `->`, 1);
console.log(milk(100, 0.5, 9), `->`, 6);










// console.log(milk(100, 0.5));
// console.log(milk(100,));
// console.log(milk());


