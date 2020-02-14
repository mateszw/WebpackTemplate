const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: ["babel-polyfill", "./src/index.js", "./src/app.ts"],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")

    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    module: {
        rules: [{
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]


    },


};