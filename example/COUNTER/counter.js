let counter = 0;

// module.exports = () => console.log(++counter);

module.exports.add = number => {
    counter += number;
    console.log(counter);
}

module.exports.delete = number => {
    counter -= number;
    console.log(counter);
}

module.exports.multiplication = number => {
    counter *= number;
    console.log(counter);
}

module.exports.division = number => {
    counter /= number;
    console.log(counter);
}
