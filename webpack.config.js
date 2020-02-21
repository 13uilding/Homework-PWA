const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: {
      index: "./public/index.js",
      db: "./public/db.js"
    },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      name: "budget-app",
      short_name: "budget-app",
      description: "An application for images",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      inject: "false",
      start_url: "/http://localhost:3000",
    })
  ]
};
module.exports = config;
