// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, func) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')

    if (!error) return func(data); 
  });
  // ISSUE: Attempting to return data out here will axslso not work.
  //        Currently not returning anything from here, so this function returns undefined.
}

// we try to get the return value
const bombay = breedDetailsFromFile('Balinese', function(bombay){
  console.log('Return breed: ', bombay);
});
// process.stdout.write('Return Value: ', bombay)