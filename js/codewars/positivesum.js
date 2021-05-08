function positiveSum(arr) {

    let pradineSuma = 0;

    for (let i = 0; i < arr.length; i++) {

        const teigiamas = arr[i];

        if (teigiamas > 0){
            
            pradineSuma = pradineSuma + teigiamas;
        }
        
    }
    return pradineSuma;
}



console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);
