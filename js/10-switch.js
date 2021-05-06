
const akys = `green`;

switch (akys) {
    case `blue`:
        console.log(`Melynos`);
        break;
        
    case `green`:
        console.log(`Zalios`);
        break;

    case `brown`:
        console.log(`Rudos`);
        break;

    default:
        console.log(`Neatpazinta spalva`);
        break;
}

if (akys=== `blue`) {
    console.log(`Melynos`);
}

else if (akys=== `green`) {
    console.log(`Zalios`);
}
else if (akys=== `brown`) {
    console.log(`Rudos`);
} 
else {
    console.log(`Neatpazinta spalva`);
}

console.log(`---------skaiciai----------`);

const day = 55;

switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: 
        console.log(`Darbo diena`);
        break;

    case 6:
    case 7: 
        console.log(`Savaitgalis`);
        break;

    default:
        console.log(`Neatpazinta savaites diena`);
        break;
}