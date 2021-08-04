const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./index.js"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)$/i,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    // 处理HTML文件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),
    }),
  ],
  devServer: {
    port: 3001,
    open: true,
  },
  performance: {
    hints: "warning", // 枚举
    hints: "error", // 性能提示中抛出错误
    hints: false, // 关闭性能提示
    maxAssetSize: 200000, // 整数类型（以字节为单位）
    maxEntrypointSize: 400000, // 整数类型（以字节为单位）
    assetFilter: function (assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    },
  },
};
