const fs = require('fs');

// 1. ACCESS
// fs.access('./names.txt', fs.constants.W_OK, (err) => {
//     console.log(err ? "plik nie istnieje" : "plik istnieje");
// });

// fs.access('./locked.txt', fs.constants.W_OK, (err) => {
//     console.log(err ? "plik nie można zapisywać" : "plik można zapisywać");
// });

// 2. RENAME

// try {
//     fs.renameSync('imiona.txt', 'names.txt')
// } catch (err) {
//     console.log(err);
// }

// fs.rename('imiona.txt', 'names.txt', (err) => {
//     if (err) console.log(err);
//     else console.log("nazwa zmieniona");
// });

// console.log("ok");

// 3. READDIR

// console.log(fs.readdirSync('./'));

// fs.readdir('./', (err, files) => {
//     if (err) console.log("Blad: ", err);
//     else console.log("Zawartosc: ", files);
// })

// 4. RREADFILE

// fs.readFile('names.txt', 'utf8', (err, data) => {
//     if (err) throw Error(err)
//     console.log(data);
// })

// let names = "";

// try {
//     names = fs.readFileSync('names.txt', 'utf8');
// } catch (err) {
//     names = false;
// }

// console.log(names);

// 5. WRITEFILE

// fs.readFile('names.txt', 'utf8', (err, data) => {
//     if(err) return console.log("nie udalo sie");

//     fs.writeFile('users.txt', data, (err) => {
//         if(err) console.log(err);
//         else console.log("udalo sie zapisac w pliku");
//     })
// })

const names = ", Jan, Jerzy"

fs.readFile('names.txt', (err, data) => {
    console.log(data);
    fs.appendFile('users.txt', data, (err) => {
        if(err) console.log(err);
        else console.log("udalo sie zapisac w pliku");
    })
})
