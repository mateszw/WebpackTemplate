const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: ["babel-polyfill", "./src/index.js", "./src/app.ts"],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")

    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new MiniCssExtractPlugin({
        filename: '[name].min.css'
    })],
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader"]
            },

            {

                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

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