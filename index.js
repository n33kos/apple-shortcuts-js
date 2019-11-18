const { buildShortcut } = require('@joshfarrant/shortcuts-js');
const fs = require('fs');
const shortcutsPath = './src';

console.log("----------Generating shortcuts from files in ./src----------");
fs.readdir(shortcutsPath, function (err, files) {  
  files.forEach(function (file) {
    const shortcutName = `./dist/${file.replace('.js', '.shortcut')}`;
    const filePath = `${shortcutsPath}/${file}`;
    const shortcutActions = require(filePath);

    console.log(`building shortcut: ${shortcutName}`);
    const shortcut = buildShortcut(shortcutActions);

    fs.writeFile(shortcutName, shortcut, () => {});
  });
  
  console.log('\n');
});