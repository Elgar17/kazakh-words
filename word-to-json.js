const fs = require('fs');

const inputText = fs.readFileSync('./basic-3000.txt', 'utf-8');

const regex = /([а-яәіңғүұқөһӘІҢҒҮҰҚӨҺa-zA-Z ]+)\s+([a-zA-Z,]+)\s+([\u4e00-\u9fa5，]+)/g;

const matches = inputText.matchAll(regex);

const jsonArray = Array.from(matches).map(match => ({
    kz: match[1],
    en: match[2],
    zh: match[3]
}));

const jsonString = JSON.stringify(jsonArray, null, 2);

fs.writeFileSync('basic-3000.json', jsonString);

console.log(`Result has been written to output.json ${jsonArray.length} words`);
