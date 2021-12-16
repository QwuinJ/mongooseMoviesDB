const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log(process.env.TEST);
console.log(process.env.DB_PASSWORD);
