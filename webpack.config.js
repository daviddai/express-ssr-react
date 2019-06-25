const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: "development",
    entry: {
        vendor: ["@babel/polyfill", "react"],
        app: ["./src/react/index.jsx"]
    },
    output: {
        path: path.resolve(__dirname, "build/js"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /ignore-styles\.js$/,
                use: {
                    loader: "null-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].css"
        })
    ]
};

module.exports = config;