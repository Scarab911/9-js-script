/*

STRINGS (tekstas)

iniciavimo budai:
- viengubos (') kabutes
- dvigubos (")
- backtick (`) kabutes


*/

const kabutes = 'Labas';
const kabutes2 = "rytas";
console.log(kabutes);
console.log(kabutes2);

//Viengubos (') kabutes.
const kabutes21 = "Viengubos (') kabutes.";
console.log(kabutes21);

//Dvigubos (") kabutes.
const kabutes12 = 'dvigubos (") kabutes.';
console.log(kabutes12);

//Viengubos (') kabutes ir Dvigubos (") kabutes.
const kabutes3 = "Viengubos (') kabutes ir Dvigubos (\") kabutes."
console.log(kabutes3);
/* backslash panaudojamas kad praleistu skaitymo
elementa(igoruoja funkcini elementa SUTEKSTINA)
*/

//Tekste backslash \ yra jega!
const backslash = 'Tekste backslash \\ yra jega!';
console.log(backslash);

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

//HTMl log
// \n - enter
// \t - tab

const imgSrc = './img/logo/png';

const HTML = '<header >\n\
                <img  src="'+ imgSrc +'" alt="logo" class="logo">\n\
                <nav>\
                    <a href=""></a>\n\
                    <a href=""></a>\n\
                    <a href=""></a>\n\
                    <a href=""></a>\n\
                </nav>  \n\
                </header>';

console.log(HTML);

const HTML2 = `<header >
    <img  class="logo" src="${imgSrc}" alt="logo">
        <nav>
            <a href="">Link\`</a>
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
        </nav>  
        </header>`;
console.log(HTML2);

