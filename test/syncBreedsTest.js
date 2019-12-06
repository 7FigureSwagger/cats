const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    console.log(breedDetails);
  });
});


// get the return value right away from the function
const bombay = breedDetails('Bombay');
console.log(bombay) //=> prints out the description for that breed