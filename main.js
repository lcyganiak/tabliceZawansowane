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
// 1. Zwróć tablice w której wszystkie nazwy klubów pisne sa dużymi literami.
// 2. Zwróć tablice, z tymi tymi klubami któych nazwa jest dłuższ niż 5 litery
// 3. napisz funkcję która bedzie sprawdzać czy podany klub wystepuję w tablicy, jezeli klubu nie mam w tablicy to go dodajemy
// np. function czyJest(fraza) {}


// zadanie 1

// rozwiązanie dobre ale nie wydajne 
const zad1 = tablica.toString().toUpperCase().split(',') 
// toSting zaminia tablice w string  'Real, Juventus, Porto, PSG, Liverpol, Legia, Lech, Widzew'

// oczekiwane rozwiązanie 
const zad1Trener = tablica.map(item => {
    return item.toUpperCase()
})

// krórszy zapis 
const zad1TrenerKrotszyZapis = tablica.map(item => item.toUpperCase())

// zadanie 2 

const zad2 = tablica.filter(item => {
    if(item.length > 5) {
        return item
    }
})

// zad3 

function czyJest(club) {

    const isClub = tablica.find(currentValue => currentValue === club)
    if (isClub) {
        console.log ('this club already exists')
        return tablica
    } else {
        console.log ('the club has been added')
        return tablica.unshift (club)
    }
}

// krótsze rozwiązanie z ternary

// czym jest ternary 

if(tablica.length > 50) {
     'bardzo mało klubów'
} else {
    'duzo klubów'
}

tablica.length > 50 ? 'bardzo mało klubów' : 'duzo klubów'

tablica.map(item => {
    if(item.length > 5) {
        return item.toLowerCase()
    } else {
        return item.toUpperCase()
    }
})

tablica.map(item => item.length > 5 ? item.toLowerCase() : item.toUpperCase())
 //                  warunek        ? to if              : to else 
 //                                 wykona się jak       wykona sie jak 
 //                                 warunek jest prawdą  warunek jest fałszem


 