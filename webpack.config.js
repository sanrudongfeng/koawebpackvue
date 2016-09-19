module.exports = {
    entry: ['babel-polyfill', './lib/app.js'],
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
  


