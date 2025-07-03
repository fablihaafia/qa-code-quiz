const baseConfig = require("./webpack.config.js");
const path = require("path");

// Clone the base config and modify for test use
module.exports = {
  ...baseConfig,
  mode: "development",
  devServer: {
    ...baseConfig.devServer,
    port: 8081,
    open: false,
  },
  entry: "./src/index.test.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.test.js",
  },
};
