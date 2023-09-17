// async patterns in node.js

const fs = require('fs');

console.log('start');
fs.readFile('./result.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  fs.readFile('./result.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    // Write the result to a new file
    fs.writeFile('./result3.txt', `here is the result : ${first},${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('done with the task');
    });
  });
});
console.log('starting the next task');
