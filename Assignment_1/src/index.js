const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  await fs.writeFile(`${fileName}.txt`, fileContent, 'utf8', (err) => {
    if (err) throw err;
  });
};

const myFileReader = async (fileName) => {
  const data = await fs.readFile(fileName + '.txt', (err, data) => {
    if (err) throw err;
    else return data;
  });
  console.log(data.toString());
};

const myFileUpdater = async (fileName, fileContent) => {
  await fs.appendFile(fileName + '.txt', ' ' + fileContent, (err) => {
    if (err) throw err;
  });
};

const myFileDeleter = async (fileName) => {
  await fs.unlink(fileName + '.txt', (err) => {
    if (err) throw err;
  })
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };

// Please un-comment the lines below to run the function one by one

// myFileWriter('testfile', 'Hello');
// myFileReader('testfile')
// myFileUpdater('testfile', 'World')
// myFileDeleter('testfile')