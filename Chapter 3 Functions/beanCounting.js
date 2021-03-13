function countChar(string, char) {
    let count = 0;
    for (i = 0; i <= string.length - 1; i++) {
        if (string[i] === char) {
            count++;
        }
    }

    return count
}

function countBs(string) {
    return countChar(string, 'B');
}

console.log(countBs("BBC"));
// -> 2
console.log(countChar("kakkerlak", "k"));
// -> 4
