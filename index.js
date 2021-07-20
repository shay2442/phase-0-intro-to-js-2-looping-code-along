// Code your solutions in this file
// const cards = ["Ada", "Brendan", "Ali"];

function writeCards(names, occasion) {
    let result = [];
    for (let i=0; i < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return result;
}

function countDown(number) {
    let j = number;
    while (j >= 0) {
        console.log(j);
        j--;
    }
}

// countDown();
