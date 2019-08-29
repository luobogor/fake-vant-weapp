const path = require('path');
const { exec } = require('child_process');

const gulpConfig = path.resolve(__dirname, './compiler.js');

exec(`npx gulp -f ${gulpConfig} buildExample`);
console.log('gulp .....')
