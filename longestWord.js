function longest(sentence) {

    let words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }


    console.log(`${longestWord}: ${longestWord.length} character`);
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
longest(sentence);

