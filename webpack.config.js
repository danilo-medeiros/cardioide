module.exports = {
    mode: "production",
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: __dirname + '/src',
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'cardioide.bundle.js',
        path: __dirname + '/dist'
    }
}