function reverseStringWithNumber(input) {
    let letters = '';
    let numbers = '';

    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            letters += input[i];
        } else {
            numbers += input[i];
        }
    }

    let reversedLetters = letters.split('').reverse().join('');

    return reversedLetters + numbers;
}

let input = "NEGIE1";
let output = reverseStringWithNumber(input);
console.log(output); 
