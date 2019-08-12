const path = require('path');

module.exports = {
    watch: true,
    entry: './src/js/index.js',
    mode: 'development',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 500,
        ignored: ['package.json', 'node_modules', '.gitignore']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}