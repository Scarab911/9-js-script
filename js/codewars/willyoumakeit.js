function zeroFuel (distanceToPump, mpg, fuelLeft){
    
    const iCanRun = mpg * fuelLeft;
    
    return iCanRun >= distanceToPump ? true : false;
}  


console.log(zeroFuel(50, 25, 2), `->`, true);
console.log(zeroFuel(100, 50, 1), `->`, false);