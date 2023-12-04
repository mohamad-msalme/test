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
      "@api/*": path.resolve(__dirname, "src/api"),
      "@theme/*": path.resolve(__dirname, "src/theme"),
      "@icons/*": path.resolve(__dirname, "src/icons"),
      "@pages/*": path.resolve(__dirname, "src/pages"),
      "@hooks/*": path.resolve(__dirname, "src/hooks"),
      "@styles/*": path.resolve(__dirname, "src/styles"),
      "@context/*": path.resolve(__dirname, "src/context"),
      "@providers/*": path.resolve(__dirname, "src/providers"),
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
      templateParameters: {
        googleFontLink:
          "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap",
      },
    }),
    // ... other common plugins
  ],
};
