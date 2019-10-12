const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"]
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader"),
    options: { configFileName: path.resolve(__dirname, "./tsconfig.json") }
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.resolve.alias["@rootDir"] = path.resolve(__dirname, "../");

  console.log(config.resolve.alias, 'alias')
  return config;
};
