
// var 

name = 'Jan'



console.log(name)

var name = "Marysia"

add()
// add2() - funkcja nie odpali 

// add3()
add4()
// let i const 

// age = 15

// let age = 10
// błędny zapis , napierw deklatujemy póxniej edytujemy



function add() {
    console.log('będę dodawać')
}


// przypisywanie funkcji do zmiennej 
// jeżeli funkcja ma mieć parapetry to 
//const add2 = (paramert) w nawiasach dodajemy parametry 
const add2 = () => {
    console.log('będę dodawać add2') 
}

var add3 = function() {
console.log('będę dodawać add3')
}
var add4 = function xd() {
    console.log('będę dodawać xd') 
}
add2()


// zestaw zminnych 
// funkcje wielokrotnego użytku


// działanie kodu 




// zasięg zmiennych 

const globalnyConst = "Jestem const Globalny"

let globalnyLet = 'Jestem let Globalny'

var globalnyVar = 'Jestem var Globalny'



let arr = []

function globalnaVsLokalna() {
    console.log(globalnyLet)
    const lokalnyConst = "lokalnyConst"
    let lokalnyLet = "lokalnyLet"
    var  lokalnyVar = 'lokalnyVar'
}
console.log(lokalnyLet) // nie wyświetli się po za funkcją 


// let a = {
//     name: 'Jan'
// }

// a = {
//     age: 15
// }

// const b = {
//     name: "Adam"
// }

// b.name = "Jan"