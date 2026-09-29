const path = require('path');
const os = require('os');

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("../"+__filename));
console.log(path.basename(__dirname));
console.log("=========================================================");
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.cpus());
