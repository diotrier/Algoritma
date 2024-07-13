function looping(INPUT, QUERY) {
    let result = [];

    for (let queryWord of QUERY) {

        let count = INPUT.filter(inputWord => inputWord === queryWord).length;
        result.push(count);
    }

    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = looping(INPUT, QUERY);
console.log(OUTPUT); 
