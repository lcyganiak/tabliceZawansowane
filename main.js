const movies = [
    {
      id: 2,
      name: "Pulp Fiction",
      releaseDate: "03-09-1994",
      runningTimeInMinutes: 154,
      wonAnyAwards: true,
      genres: ["action", "fantasy", "sci-fi"],
      poster: {
        name: "pulp",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "8.9", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "92", scoreType: "percent" },
        { criticName: "Metacritic", score: "94", scoreType: "percent" }
      ],
      description:
        "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals."
    },
    {
      id: 1,
      name: "Terminator",
      releaseDate: "26-10-1984",
      runningTimeInMinutes: 107,
      wonAnyAwards: true,
      genres: ["drama", "action", "crime"],
      poster: {
        name: "term",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "8", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "100", scoreType: "percent" },
        { criticName: "Metacritic", score: "84", scoreType: "percent" }
      ],
      description:
        "The Terminator is a 1984 American science fiction film directed by James Cameron. It stars ... of the time was unable to create the liquid Terminator, and returned to the idea with the T-1000 character in Terminator 2: Judgment Day (1991)"
    },
    {
      id: 4,
      name: "Rambo",
      releaseDate: "22-10-1982",
      runningTimeInMinutes: 99,
      wonAnyAwards: true,
      genres: ["thriller", "action"],
      poster: {
        name: "rambo",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "7", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "46", scoreType: "percent" }
      ],
      description:
        "Rambo enables a missionary and her comrades to enter Burma. Two weeks later, he gets a call requesting help as the missionaries have been held hostage by Burmese soldiers. He sets out to save them."
    },
    {
      id: 3,
      name: "The Shining",
      releaseDate: "23-05-1980",
      runningTimeInMinutes: 146,
      wonAnyAwards: false,
      genres: ["mystery", "psychological", "horror"],
      poster: {
        name: "shining",
        extension: "jpg"
      },
      scores: [
        { criticName: "IMDb", score: "8.4", scoreType: "points" },
        { criticName: "Rotten Tomatoes", score: "85", scoreType: "percent" }
      ],
      description:
        "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members."
    }
  ];
  
  // praca domowa Tablice 
  const tablica = ['Real', 'Juventus', 'Porto', "PSG", "Liverpol", 'Legia', 'Lech', "Widzew"]
// 1. Zwr???? tablice w kt??rej wszystkie nazwy klub??w pisne sa du??ymi literami.
// 2. Zwr???? tablice, z tymi tymi klubami kt??ych nazwa jest d??u??sz ni?? 5 litery
// 3. napisz funkcj?? kt??ra bedzie sprawdza?? czy podany klub wystepuj?? w tablicy, jezeli klubu nie mam w tablicy to go dodajemy
// np. function czyJest(fraza) {}


// zadanie 1
//Zwr???? tablice w kt??rej wszystkie nazwy klub??w pisne sa du??ymi literami.


// rozwi??zanie dobre ale nie wydajne 
const zad1 = tablica.toString().toUpperCase().split(',') 
// toSting zaminia tablice w string  'Real, Juventus, Porto, PSG, Liverpol, Legia, Lech, Widzew'

// oczekiwane rozwi??zanie 
const zad1Trener = tablica.map(item => {
    return item.toUpperCase()
})

// kr??rszy zapis 
const zad1TrenerKrotszyZapis = tablica.map(item => item.toUpperCase())

// zadanie 2 
//Zwr???? tablice, z tymi tymi klubami kt??ych nazwa jest d??u??sz ni?? 5 litery
const zad2 = tablica.filter(item => {
    if(item.length > 5) {
        return item
    }
})

// zad3 
// 3. napisz funkcj?? kt??ra bedzie sprawdza?? czy podany klub wystepuj?? w tablicy, jezeli klubu nie mam w tablicy to go dodajemy
// np. function czyJest(fraza) {}
function czyJest(club) {

    const isClub = tablica.find(currentValue => currentValue === club)
    if (isClub) {
        console.log ('this club already exists')
        return tablica
    } else {
        console.log ('the club has been added')
        return tablica.unshift(club)
    }
}

// kr??tsze rozwi??zanie z ternary

// czym jest ternary 

if(tablica.length > 50) {
     'bardzo ma??o klub??w'
} else {
    'duzo klub??w'
}

tablica.length > 50 ? 'bardzo ma??o klub??w' : 'duzo klub??w'

tablica.map(item => {
    if(item.length > 5) {
        return item.toLowerCase()
    } else {
        return item.toUpperCase()
    }
})

tablica.map(item => item.length > 5 ? item.toLowerCase() : item.toUpperCase())
 //                  warunek        ? to if              : to else 
 //                                 wykona si?? jak       wykona sie jak 
 //                                 warunek jest prawd??  warunek jest fa??szem




 // objekty 
 const obj = {
    name: "Jan",
    sName: 'Kowalski',
    age: 50,
    cars: [ 'Opel', "Audi" ],
  }

  // zad1 napisz funkcj?? kt??ra zwr??ci liczb?? key w obiekcie. Funkcja z paramtrem, tak ??eby mozna by??o sprawdzi?? w przysz??o??ci dowolny Objekt.

  function ileKluczy(parametr) {
      const keys = Object.keys(parametr) // zwraca tablice z nazwami kluczy ['name', 'sName', 'age', 'cars']
      const liczbaKluczy = keys.length // zwraca d??ugo??c tablicy czyli 4
      return liczbaKluczy

    // return Object.keys(parametr).length  to samo w jedej lini
    
  }

  ileKluczy(obj)

  // zad 2 
  // funkcja kt??ra wypisz?? w tablicy typy danych poszczeg??lnych kluczy, wynikiem ma by?? w przypdku powu??szego obiektu tablica [string, string, number, array]


  let tablicaKluczy = []
// rozwi??zanie z forEachem
  function wartosciKluczy(parametr) {
    const keys = Object.keys(parametr) // zwraca tablice z nazwami kluczy ['name', 'sName', 'age', 'cars']
    console.log('tablica kluczy', keys)
    keys.forEach(item => {
        tablicaKluczy.push( typeof obj[item])
    })
  }
wartosciKluczy(obj)
console.log('wynik zadani 2', tablicaKluczy)


// rozwi??zanie z map 
// b??ednie zwr??ci same stringi 
// function wartosciKluczyZMap(paramert) {
//     const keys = Object.keys(paramert) // zwraca tablice z nazwami kluczy ['name', 'sName', 'age', 'cars']
//     return keys.map(item => typeof item)
// }

// const wynik = wartosciKluczyZMap(obj)
// console.log('wynik zadani 2 z map', wynik)

// zad 3 Stw??rz class NewTax kt??ra za parametry przyjmie , nazw?? podatku , warto??c podatku, dodatkowo jeden geter z wypisnanym " Od 1 stycznia wchodzi nowy podatek "tu nazwa podatku " w wyskoko??ci "warto??ci podatku ". Pozdrrawiam Mateusz M", oraz jeden set zminieaj??cy warto??ci podatku


class NewTax {
    constructor(nazwa, wartosc) {
        this.nazwa = nazwa;
        this.wartosc = wartosc
    }
    get opis() {
      //  return `Od 1 stycznia wchodzi nowy podatek  ${this.nazwa} w wyskoko??ci ${this.wartosc}. Pozdrrawiam Mateusz M`
        return 'Od 1 stycznia wchodzi nowy podatek' + ' ' + this.nazwa + ' ' + ' w wyskoko??ci' + ' ' + this.wartosc + ' '  + '. Pozdrrawiam Mateusz M' 
    }
    set nowaWartosc(val) {
        // if(val < 20) {
        //     console.log("Za mama warto??ci podatku") 
        // } else {
        //     this.wartosc = val
        // }
        this.wartosc = val< 20 ? "Za mama warto??ci podatku" : val
    }
}
const nowyPodatek = new NewTax('Kastralny', 19)
console.log(nowyPodatek.nazwa)
console.log(nowyPodatek.opis)



// zadani dodatkowe Z linku 
// https://codesandbox.io/s/array-prototype-wnoel?file=/src/index.js
//1 zwr???? tablic?? z nazwami film??w, d??u??szych ni?? 120 minut (runningTimeInMinutes klucz z minutami )
//2 zwr???? tablice z nazwami film??w kt??re zdoby??y nagrod?? (wonAnyAwards: )


//zad 1 
const dluzszeNiz120 = movies.filter(item => {
    return item.runningTimeInMinutes > 120
})


console.log(dluzszeNiz120)

const sameTytyly = dluzszeNiz120.map(item => item.name)

console.log(sameTytyly)

// rowi??zanie jednolinikowe 
const jedolinikowe =  movies.filter(item => item.runningTimeInMinutes > 120).map(item => item.name)

// rozwi??zanie z p??tl?? 

let tytuly = []

for(let i =0 ; i < movies.length; i++) {
  
    if(movies[i].runningTimeInMinutes > 120 ) {
        console.log(movies[i].name, 'jestem numerm', i)
        tytuly.push(movies[i].name)
    }
}
console.log(tytuly)