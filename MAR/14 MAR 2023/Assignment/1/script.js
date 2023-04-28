function countWords(str) {
    const words = str.split(' ');
    const wordCounts = new Map();

    for (let i = 0; i <words.length; i++) {
        const word = words[i];
        if (wordCounts.has(word)) {
            wordCounts.set(word, wordCounts.get(word) + 1);
        } else {
            wordCounts.set(word, 1);
        }
    }

    return wordCounts;
}

const text = 'This is a sample text that contains some sample words. This is a test of the word counting function.'
const wordCounts = countWords(text);

console.log(wordCounts);

for (const [word, count] of wordCounts.entries()) {
    console.log(`${word}: ${count}`);
}