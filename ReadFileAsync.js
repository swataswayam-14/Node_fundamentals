const fs = require('fs');

fs.readFile('./result.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  fs.readFile(`./contents/FSText.txt`, 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    fs.writeFile('resultAsync.txt', `Here is the result ${first},${second}`, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('The file was written successfully.');
    });
  });
});