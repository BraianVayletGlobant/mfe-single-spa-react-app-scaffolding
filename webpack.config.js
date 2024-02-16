const { merge } = require("webpack-merge");
const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "santander",
    projectName: "mfe-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      alias: { "@": path.resolve(__dirname, "src") },
      plugins: [new TsconfigPathsPlugin()],
      extensions: [".js", ".ts", ".tsx", ".test.js", ".test.ts", ".test.tsx"],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  });
};
