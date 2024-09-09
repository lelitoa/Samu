// Zadanie 1

// const fetch = require('node-fetch');
// console.log(process.argv);

// const year = process.argv[2] || Math.floor(Math.random() * 2020);
// // console.log(year);

// fetch(`http://numbersapi.com/${year}/year?json`)
//     .then(response => response.json())
//     .then(data => console.log(data.text))
//     .catch(error => console.log("Eroor", error))

// Zadanie 2
// `http://numbersapi.com/${number}/${type}?json`

// const fetch = require('node-fetch');

// const arg = process.argv[2];
// let type = "";

// if(arg.indexOf("--year") === 0) {
//     console.log("szukamy informacji o roku ...");
//     type = "year";
// } else if (arg.indexOf("--math") === 0) {
//     console.log("szukamy informacji o liczbie...");
//     type = "math";
// } else if (arg.indexOf("--trivia") === 0) {
//     console.log("szukamy liczby-ciekawostki ...");
//     type = "trivia";
// }

// const equalSign = arg.search('=');
// // console.log(equalSign);
// if (equalSign === -1) console.log('nie wpisales liczby!');

// const number = arg.slice(equalSign + 1);
// // console.log(number);

// // if(number === "" || isNaN(Number(number))) {
// //     console.log("to nie jest liczba");
// //     process.exit();    
// // }

// fetch(`http://numbersapi.com/${number}/${type}?json`)
//     .then(response => {
//         if(response.ok) {
//             return response.json()
//         } else {
//             throw new Error("ooo cos nie tak: " + response.status)
//         }
//     })
//     .then(response => console.log(response.text))
//     .catch(err => console.log("Blad: ", err))

// Zadanie 3 - NBP API - request
// https://api.nbp.pl/api/exchangerates/rates/a/${code}/

const request = require('request');
const fs = require('fs');

const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];

const isValid = validCodes.find(currency => currency === code) ? true : false;
console.log(isValid);

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

request(url, {json:true}, (err, res, body) => {
    if (err) {
        return console.log("Blad: ", err)
    }

    if(res.statusCode !== 200) {
        return console.log("cos nie tak poszlo, sprawdz url");
    };

    const message = `Srednia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} zlotych`;
    
    fs.appendFile('curriencies.txt', message + '\n', (err) => { 
        console.log("dane dodane do pliku");
    })
    
    console.log(message);
})

console.log(url);
