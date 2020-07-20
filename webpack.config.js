const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const distPath = "assets/";
const publicPath = "public/assets/";

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./assets/js/[name].js",
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
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: [path.resolve(__dirname, "node_modules")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "plugins/global/fonts",
              publicPath: "fonts",
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "../src/assets/fonts/",
            publicPath: "./assets/fonts",
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              emitFile: true,
              esModule: false,
              outputPath: "../src/assets/img/",
              publicPath: "./assets/img",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].css",
      ignoreOrder: false,
    }),
    new MinifyPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: publicPath + "css", to: distPath + "css" },
        { from: publicPath + "js", to: distPath + "js" },
        { from: publicPath + "img", to: distPath + "img" },
        { from: publicPath + "font/fonts", to: distPath + "font/fonts" },
        { from: publicPath + "font/svgs", to: distPath + "font/svgs" },
      ],
    }),
  ],
};
