const fs = require('fs');
const path = require('path');

const appFolder = 'apps';
const configFileName = 'config.json';
const destinationFolder = '_site';

if (fs.existsSync(destinationFolder)) {
  fs.rmSync(destinationFolder, { recursive: true })
}
fs.mkdirSync(destinationFolder);

const subdirectories = fs.readdirSync(appFolder, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

subdirectories.forEach((subdirectory) => {
  const folder = path.join(appFolder, subdirectory);
  const configFile = path.join(folder, configFileName);

  if (fs.existsSync(configFile)) {
    // Read config file
    const configData = fs.readFileSync(configFile, 'utf8');
    const config = JSON.parse(configData);
    const srcFolder = path.join(folder, config.src);
    const destFolder = path.join(destinationFolder, config.dest);

    // Create destination folder
    fs.mkdirSync(destFolder, { recursive: true });

    // Move files
    fs.mkdirSync(destFolder, { recursive: true });

    // Move files and directories
    moveFolderContents(srcFolder, destFolder);

    console.log(`Files moved successfully for ${folder}!`);
  }
});

function moveFolderContents(source, destination) {
  if (fs.existsSync(source)) {
    fs.readdirSync(source).forEach((file) => {
      const sourcePath = path.join(source, file);
      const destinationPath = path.join(destination, file);

      fs.renameSync(sourcePath, destinationPath); // Move file or directory
    });
  }
}
