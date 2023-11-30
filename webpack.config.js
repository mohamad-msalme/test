const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = (env, argv) => {
  const mode = argv.mode === "production" ? "prod" : "dev";
  const config = require(`./webpack.${mode}.js`);
  return merge(common, config);
};
