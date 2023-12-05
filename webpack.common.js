const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
    clean: true,
    assetModuleFilename: "assets/images/[name][ext]",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@api/services": path.resolve(__dirname, "src/api/services"),
      "@api/client": path.resolve(__dirname, "src/api/client"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@models": path.resolve(__dirname, "src/models"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Soialha",
      inject: "body",
    }),
  ],
};
