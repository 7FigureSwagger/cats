// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, func) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')

    if (!error) return func(data); 
  });
 }

// we try to get the return value
//const bombay = breedDetailsFromFile('Bombay', function(bombay){
 // console.log('Return breed: ', bombay);
//});
// process.stdout.write('Return Value: ', bombay)

module.exports = breedDetailsFromFile;

