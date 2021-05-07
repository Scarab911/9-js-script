
function even(a) {
    if (a % 2 === 0){
        return true;
    }

    return false;
}

console.log(even(3), `->`, `nelyginis`);
console.log(even(10), `->`, `lyginis`);

/// su Ternary operatorium:

function even(a) {
    return a % 2 === 0 ? true : false ;
}