module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ["node_modules/", "build/", "dist/", ".eslintrc.ts"],
};
