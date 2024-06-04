const tanya = document.getElementById ('tanya')
const jawab = document.getElementById ('jawab')

tanya.innerHTML = 'nama senyawa dengan rumus kimia NaCl adalah ';

function star() {
    if (jawab.value == "garam dapur" ) {
        alert ('benarrr')
        window.location  = ('game1.html')
    }
    else {
        alert ( 'jawaban salah')
    }
    
}
// tanya1.innerHTML = 'jika x + 3y = 15 dan 3x + 6y = 30 maka tentukanlah nilai dari y';

// function star1 () {
//     if (jawab.value == 5 ) {
//         alert ('benarrr')
//         window.location  = ('game2.html')
//     }
//     else {
//         alert ( 'jawaban salah')
//     }
// }
// 

