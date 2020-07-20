const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const distPath = "assets/";
const srcPath = "src/Components/";

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  entry: "src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./assets/js/bundle.[contentHash].js",
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
        test: /\.?css$/i,
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
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./assets/css/bundle.[contentHash].css",
      ignoreOrder: false,
    }),
    new MinifyPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: srcPath + "img", to: distPath + "img" }],
    }),
  ],
};
