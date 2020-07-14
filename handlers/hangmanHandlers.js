const { words } = require("../data/words");

const getWordObj = (req, res) => {
  const wordObj = words[Math.floor(Math.random() * words.length)];
  res.status(200).send({ id: wordObj.id, letterCount: wordObj.letterCount });
};

const letterGuess = (req, res) => {
  const booleanArray = [];
  const theWordId = req.params.id;
  const theWordObj = words.find((word) => {
    return word.id === theWordId;
  });
  const lettersArray = theWordObj.word.split("");

  lettersArray.forEach((letter) => {
    if (letter === req.params.letter) {
      booleanArray.push(true);
    } else {
      booleanArray.push(false);
    }
  });

  res.status(200).send(booleanArray);
};

module.exports = { getWordObj, letterGuess };
