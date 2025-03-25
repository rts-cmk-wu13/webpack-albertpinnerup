const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
        subpage: "./src/subpage.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource"
            }
        ]
    }
}