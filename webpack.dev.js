const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: ".env.development",
    }),
    // ... other development-specific plugins
  ],
};
