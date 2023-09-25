const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const userDirectoriesPath = path.join(__dirname, 'user_directories');

app.use(express.json());

function createDirectory(identifier) {
  const userDirectory = path.join(userDirectoriesPath, identifier);
  return new Promise((resolve, reject) => {
    fs.mkdir(userDirectory, { recursive: true }, (err) => {
      if (err) {
        reject(`Error creating directory for identifier: ${identifier}`);
      } else {
        console.log(`Created directory for identifier: ${identifier}`);
        resolve();
      }
    });
  });
}

function syncFileToUserDirectory(identifier, filename, fileContent) {
  const userDirectory = path.join(userDirectoriesPath, identifier);
  const destinationPath = path.join(userDirectory, filename);

  fs.writeFileSync(destinationPath, fileContent);
  console.log(`File ${filename} synced to user directory for identifier: ${identifier}`);
}

app.post('/sync', async (req, res) => {
  console.log('Received sync request:', req.body);
  const { macAddress, filename, fileContent } = req.body;

  try {
    await createDirectory(macAddress);
    syncFileToUserDirectory(macAddress, filename, fileContent);
    res.status(200).send('File synced successfully.');
  } catch (error) {
    res.status(500).send(`Error syncing file: ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
