const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve('../index.js'),
                    }
                ]
            }
        ]
    }
};