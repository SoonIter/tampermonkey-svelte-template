const fs = require('fs');
const path = require('path');
let data = fs.readFileSync(path.join(__dirname, '../dist/style.css'), 'utf8');
fs.appendFileSync(
  path.join(__dirname, '../dist/Tampermonkey.umd.js'),
  `const cssDom = document.createElement('style');cssDom.innerHTML = \`${data}\`;document.head.appendChild(cssDom);`,
);
fs.unlinkSync(path.join(__dirname, '../dist/style.css'));

fs.unlinkSync(path.join(__dirname, '../dist/favicon.ico'));
