const path = require('path');

module.exports = {
    mode: "production",
    entry: "./assets/script/app.js",
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    }
}