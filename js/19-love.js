function love(leafCount) {
    return leafCount % 2 === 0 ? false : true ;
    
}

console.log(love(7), `->`, 'Myli');
console.log(love(70), `->`, 'Nemyli');