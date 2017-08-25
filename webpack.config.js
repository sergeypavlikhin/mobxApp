module.exports = {
    entry: './src/App.jsx',
    output: {
        path:  __dirname + '/out',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};