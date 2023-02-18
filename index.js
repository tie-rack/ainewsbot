const fs = require('fs');
const tracery = require('tracery-grammar');

const grammarDefinition = JSON.parse(fs.readFileSync('bot.json', 'utf8'));

// quick and dirty text wrap
// from: https://codereview.stackexchange.com/a/171857
const formatTextWrap = (text, maxLineLength) => {
  const words = text.replace(/[\r\n]+/g, ' ').split(' ');
  let lineLength = 0;

  return words.reduce((result, word) => {
    if (lineLength + word.length >= maxLineLength) {
      lineLength = word.length;
      return result + `\n${word}`; // don't add spaces upfront
    } else {
      lineLength += word.length + (result ? 1 : 0);
      return result ? result + ` ${word}` : `${word}`; // add space only when needed
    }
  }, '');
};

const generateStory = () => {
  let grammar = tracery.createGrammar(grammarDefinition);
  grammar.addModifiers(tracery.baseEngModifiers);
  return formatTextWrap(grammar.flatten('#origin#'), 80);
};

console.log();
console.log(generateStory());
console.log();
console.log(generateStory());
console.log();
console.log(generateStory());
console.log();
console.log(generateStory());
console.log();
console.log(generateStory());
console.log();
console.log(generateStory());
console.log();
console.log(generateStory());
