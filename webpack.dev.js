const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true, // Add this line
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
