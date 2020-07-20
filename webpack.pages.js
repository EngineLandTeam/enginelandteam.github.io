const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const assetsPath = "../assets/";
const srcPath = "src/Components/";
const publicPath = "public/assets/";

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "assets/js/bundle.js",
  },
  devServer: {
    port: 5000,
  },
  resolve: {
    extensions: ["*", ".mjs", ".js", ".jsx", ".svelte"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /styles\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /styles\.css$/,
        use: {
          loader: "style-loader",
          loader: "css-loader",
          loader: "sass-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: false,
          minimize: false,
        },
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "../index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/bundle.css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: publicPath + "img", to: assetsPath + "img" },
        { from: srcPath + "img", to: assetsPath + "image" },
      ],
    }),
  ],
};
